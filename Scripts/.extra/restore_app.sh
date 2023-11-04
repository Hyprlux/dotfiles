#!/bin/bash
#|---/ /+-----------------------------+---/ /|#
#|--/ /-| Script to configure my apps |--/ /-|#
#|-/ /--| Ew4n1011/Prasanth Rangan    |-/ /--|#
#|/ /---+-----------------------------+/ /---|#

ScrDir=`dirname $(dirname $(realpath $0))`

source $ScrDir/global_fn.sh
if [ $? -ne 0 ] ; then
    echo "Error: unable to source global_fn.sh, please execute from $(dirname $(realpath $0))..."
    exit 1
fi

CloneDir=`dirname $(realpath $CloneDir)`

# icons
if [ -f /usr/share/applications/rofi-theme-selector.desktop ] && [ -f /usr/share/applications/rofi.desktop ]
    then
    sudo rm /usr/share/applications/rofi-theme-selector.desktop
    sudo rm /usr/share/applications/rofi.desktop
fi
sudo sed -i "/^Icon=/c\Icon=adjust-colors" /usr/share/applications/nwg-look.desktop
sudo sed -i "/^Icon=/c\Icon=spectacle" /usr/share/applications/swappy.desktop

# discord
if pkg_installed discord
    then
#    discord &> /dev/null &
#    sleep 2
#    killall discord

    sh -c "$(curl -sS https://raw.githubusercontent.com/Vendicated/VencordInstaller/main/install.sh)"
fi

# spotify
if pkg_installed spotify && pkg_installed spicetify-cli && pkg_installed spicetify-themes-git
    then
    spotify &> /dev/null &
    sleep 2
    killall spotify

    sudo chmod a+wr /opt/spotify
    sudo chmod a+wr /opt/spotify/Apps -R
    
    # Setup spicetify themes (Dribbblish)
    cd /usr/share/spicetify-cli/Themes/Dribbblish
    spicetify config current_theme Dribbblish color_scheme rosepine
    spicetify config inject_css 1 replace_colors 1 overwrite_assets 1 inject_theme_js 1
    
    spicetify backup apply
fi

# firefox
if pkg_installed firefox
    then
    firefox &> /dev/null &
    sleep 3
    killall firefox

    FoxRel=`ls -l ~/.mozilla/firefox/ | grep .default-release | awk '{print $NF}'`
    if [ `echo $FoxRel | wc -w` -eq 1 ]
        then
        tar -xzf ${CloneDir}/Source/arcs/Firefox_UserConfig.tar.gz -C ~/.mozilla/firefox/${FoxRel}/
    else
        echo "ERROR: Please cleanup Firefox default-release directories"
    fi
fi