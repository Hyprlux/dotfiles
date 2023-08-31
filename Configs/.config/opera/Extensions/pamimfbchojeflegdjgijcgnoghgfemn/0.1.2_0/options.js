// Variables
var lang = 'en';
var defaultKasmUrl;
var regexpInput =
  '<div id="regexp" class="input-group mb-3">' +
    '<input type="text" class="form-control find" placeholder="Find">' +
    '<input type="text" class="form-control replace" placeholder="Replace">' +
    '<span class="input-group-text" id="remove_regexp">&#128465;</span>' +
  '</div>';

// Enable tool tips
$('body').on('mouseover', '[data-bs-toggle="tooltip"]', function (e) {
  e.stopPropagation();
  return new bootstrap.Tooltip(this).show();
});
$('body').on('mouseleave', '[data-bs-toggle="tooltip"]', function (e) {
  e.stopPropagation();
  $('[role="tooltip"]').remove();
});

// Saves options to chrome.storage
function saveOptions() {
  let kasm_url = $('#kasm_url').val();
  let save_confirm = $('#save_confirm');
  let enable_cast = $('#enable_cast').is(":checked");
  let enable_go = $('#enable_go').is(":checked");
  let cast_key = $('#cast_key').val();
  let enable_window = $('#enable_window').is(":checked");
  let enable_tab = $('#enable_tab').is(":checked");
  var regexp = [];
  var search_engine_url;
  // Loop through set regexp values if set
  if ($('.find').first().val()) {
    $('.find').each(function(i) {
      regexp.push([$('.find').eq(i).val(),$('.replace').eq(i).val()]);
    });
  }
  // Set search engine URL if custom
  if ($("#search_engine").val() == 'custom') {
    search_engine_url = $("#custom_search").val();
  } else {
    search_engine_url = $("#search_engine").val();
  }
  // Set browser storage
  chrome.storage.sync.set({
    kasmUrl: kasm_url,
    enableCast: enable_cast,
    enableGo: enable_go,
    castKey: cast_key,
    enableTab: enable_tab,
    enableWindow: enable_window,
    regexp: regexp,
    searchEngineUrl: search_engine_url
  }, function () {
    // Show confirmation dialouge
    save_confirm.show();
    setTimeout(function () {
      save_confirm.hide();
    }, 2000);
  });
}

// Restores options from chrome.storage
function restore_options() {
  chrome.storage.sync.get({
    kasmUrl: defaultKasmUrl,
    enableCast: false,
    enableGo: true,
    castKey: "",
    enableTab: false,
    enableWindow: true,
    regexp: [],
    searchEngineUrl: 'https://google.com/search?q='
  }, function(items) {
    $('#kasm_url').val(items.kasmUrl);
    $('#enable_cast').prop('checked', items.enableCast);
    $('#enable_go').prop('checked', items.enableGo);
    $('#cast_key').val(items.castKey);
    $('#enable_tab').prop('checked', items.enableTab);
    $('#enable_window').prop('checked', items.enableWindow);
    if ($("#search_engine option[value='" + items.searchEngineUrl + "']").length > 0) {
      $("#search_engine").val(items.searchEngineUrl);
    } else {
      $("#search_engine").val('custom');
    }
    $("#custom_search").val(items.searchEngineUrl);
    if (items.regexp.length == 0) {
      $('#regexp_inputs').append(regexpInput);
    } else {
      for (let i = 0; i < items.regexp.length; i++) {
        $('#regexp_inputs').append(regexpInput);
      }
      for (i in items.regexp) {
        let find = items.regexp[i][0];
        let replace = items.regexp[i][1];
	$('.find').eq(i).val(find);
	$('.replace').eq(i).val(replace);
      }
    }
    showKey();
    showSearch();
  });
}

// Attach logic when document is loaded
$(document).on('DOMContentLoaded', function(){
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
    let textKeys = Object.keys(data.text);
    textKeys.forEach(function (key) {
      $('#' + key).empty();
      $('#' + key).append(data.text[key]);
    });
    let titleKeys = Object.keys(data.title);
    titleKeys.forEach(function (key) {
      $('#' + key).prop('title', '');
      $('#' + key).prop('title', data.title[key]);
    });
    defaultKasmUrl = data.no_translate.default_url;
    // Restore form from chrome storage
    restore_options();
  });
  // When delete a regexp row is called remove its parent
  $('body').on("click", "#remove_regexp", function () {
    $(this).parents("#regexp").remove();
  })
  // When add a regexp row is called add one
  $('#add_regexp').click(function () {
    $('#regexp_inputs').append(regexpInput);
  });
  // When URL is modified validate it
  let kasm_url = $('#kasm_url');
  $('#kasm_url').on('input', function() {
    if (isValidUrl(kasm_url.val())) {
      kasm_url.get(0).setCustomValidity('');
    } else {
      kasm_url.get(0).setCustomValidity('Invalid URL');
    }
    kasm_url.get(0).reportValidity();
  });
  let search_url = $('#custom_search');
  $('#custom_search').on('input', function() {
    if (isValidUrl(search_url.val())) {
      search_url.get(0).setCustomValidity('');
    } else {
      search_url.get(0).setCustomValidity('Invalid URL');
    }
    search_url.get(0).reportValidity();
  });
  // Show and hide the casting key input
  $('#enable_cast').change(showKey);
  $('#enable_go').change(showKey);
  // Show and hide custom search
  $('#search_engine').change(showSearch);
  // Capture form submission and validate
  $('.needs-validation').on('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.checkValidity()) {
      saveOptions();
    }
    $(this).addClass('was-validated');
  });
});

// Show or hide cast key text input on checked
function showKey() {
  let enable_cast = $('#enable_cast').is(":checked");
  let cast_key = $('#cast_key');
  if (enable_cast) {
    cast_key.show();
    cast_key.prop('required',true);
  } else {
    cast_key.hide();
    cast_key.prop('required',false);
  }
}

// Show or hide custom search field
function showSearch() {
  let enable_custom = $('#search_engine').find(":selected").val();
  let custom_search = $('#custom_search');
  if (enable_custom == "custom") {
    custom_search.show();
    custom_search.prop('required',true);
  } else {
    custom_search.hide();
    custom_search.prop('required',false);
  }
}

// Validate URL
function isValidUrl(string) {
  try {
    var url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "https:";
}
