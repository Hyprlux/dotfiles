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


# spotify
if pkg_installed spotify && pkg_installed spicetify-cli && pkg_installed spicetify-themes-git
    then
    spotify &> /dev/null &
    sleep 2
    killall spotify

    sudo chmod a+wr /opt/spotify
    sudo chmod a+wr /opt/spotify/Apps -R
    
    # Setup spicetify themes (Dribbblish)
    cd "$(dirname "$(spicetify -c)")/Themes/Dribbblish"
    spicetify config current_theme Dribbblish color_scheme rosepine
    spicetify config inject_css 1 replace_colors 1 overwrite_assets 1 inject_theme_js 1

    if [ `ls -A ~/.config/spicetify/Backup | wc -l` -eq 0 ]
        then
        spicetify backup apply
    fi
    
    spicetify apply
fi
