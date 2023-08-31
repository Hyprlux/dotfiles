// Variables
var kasm_url;
var lang = 'en';
var urlPattern = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;

// Opens url in existing tabId if tab exists, otherwise opens new tab
function openUrl(url, configItems) {
  if (configItems.enableTab) {
    chrome.tabs.get(configItems.tabId, function(tab) {
      // Checking if it starts with kasmUrl so we don't change the url if the user navigated away from Kasm Workspaces
      if (chrome.runtime.lastError || !tab.url.startsWith(configItems.kasmUrl)) {
        // tabId passed to resume doesn't exist, so we'll create a new one
        chrome.tabs.create({
          url: url
        }, function(newTab) {
          chrome.storage.sync.set({
            tabId: newTab.id
          })
        })
      } else {
        chrome.tabs.update(tab.id, {
          active: true,
          url: url
        })
        chrome.windows.update(tab.windowId, {
          focused: true
        })
      }
    });
  } else {
    chrome.windows.get(configItems.windowId, {}, function(window) {
      if (chrome.runtime.lastError) {
        // windowId passed to resume doesn't exist, so we'll create a new one
        chrome.windows.create({
          url: url,
          type: 'popup'
        }, function(newWindow) {
          chrome.storage.sync.set({
            windowId: newWindow.id,
            tabId: newWindow.tabs[0].id
          });
        })
      } else {
        chrome.tabs.update(configItems.tabId, {
          url: url
        })
        chrome.windows.update(configItems.windowId, {
          focused: true
        })
      }
    });
  }
}

chrome.runtime.onStartup.addListener(function() {
  // Unset tabid when chrome is restarted, as it could be reused by another tab
  // in a new session.
  chrome.storage.sync.set({
    tabId: 0,
    windowId: 0
  })
})

// Set lang code based on browser setting
try {
  let fullCode = navigator.language;
  lang = fullCode.split('-')[0];
  fetch('locale/' + lang + '.json');
} catch (e) {
  lang = 'en';
}
// Grab strings for language and substitute them
fetch('locale/' + lang + '.json').then(function (res) {
  return res.json();
}).then( function(data) {
  let searchString = data.menu.search_string;
  let linkString = data.menu.link_string;
  try {
    chrome.contextMenus.create({
      id: "open-in-kasm-text",
      title: searchString + ' "%s"',
      contexts: ["selection"]
    });
    chrome.contextMenus.create({
      id: "open-in-kasm-link",
      title: linkString,
      contexts: ["link"]
    });
  } catch (e) {
    //pass
  }
  kasm_url = data.no_translate.default_url;
});

chrome.contextMenus.onClicked.addListener(async function(info, tab) {
  chrome.storage.sync.get({
    kasmUrl: kasm_url,
    enableGo: true,
    enableCast: false,
    castKey: '',
    tabId: 0,
    windowId: 0,
    enableTab: true,
    regexp: [],
    searchEngineUrl: 'https://www.google.com/search?q='
  }, async function(items) {
    if (items.kasmUrl) {
      // Remove trailing slash if there
      let kasm_url = items.kasmUrl;
      kasm_url = kasm_url.endsWith('/') ? kasm_url.slice(0, -1) : kasm_url;
      var link_url;
      var regString;
      if ('selectionText' in info) {
        regString = info.selectionText;
        if (items.regexp.length != 0) {
          for await ([find, replace] of items.regexp) {
            if (find.startsWith("/")) {
              if (find.endsWith("/")) {
                let sanitized = find.substring(1, find.length-1);
                let findR = new RegExp(sanitized); 
		regString = regString.replace(findR, replace);
              } else {
                let modifier = find.slice(-1);
                let sanitized = find.substring(1, find.length-2);
                let findR = new RegExp(sanitized, modifier);
                regString = regString.replace(findR, replace);
              }
            } else { 
              regString = regString.replace(find, replace);
            }
          }
        }
        try {
          link_url = new URL(regString);
        } catch (e) {
          if ((new RegExp(urlPattern)).test(regString)) {
            link_url = regString;
          } else {
            link_url = items.searchEngineUrl + regString.replace(/ /g, '+');
          }
        }
      } else if ('linkUrl' in info) {
        link_url = info.linkUrl;
      }
      try {
        link_url = encodeURIComponent(link_url);
      } catch (error) {
        //pass
      }
      if (items.enableGo) {
        openUrl(kasm_url + '/#/go?kasm_url=' + link_url, items)
      } else if (items.enableCast && items.castKey) {
        openUrl(kasm_url + '/#/cast/' + items.castKey + '?kasm_url=' + link_url, items)
      }
    }
  });
});
