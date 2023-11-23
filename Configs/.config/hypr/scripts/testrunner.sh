#!/usr/bin/env sh

ScrDir=`dirname $(realpath $0)`
source $ScrDir/globalcontrol.sh
WalDir="$HOME/.config/swww"
RofDir="$HOME/.config/rofi"

roficn=0
wlogcn=1

while read loop_theme
do
    themeName=`echo $loop_theme | cut -d '|' -f 2`
    $ScrDir/themeswitch.sh -s $themeName &> /dev/null
    sleep 0.2

    hyprctl dispatch workspace empty
    dolphin &> /dev/null &
    sleep 0.21
    kitty &> /dev/null &
    sleep 1.4
    hyprctl dispatch workspace empty

    #walln=`ls -l $WalDir/$themeName | wc -l`
    for (( i=1 ; i<3 ; i++ ))
    do
        # swww
        $ScrDir/swwwallpaper.sh -n &> /dev/null

        # waybar
        $ScrDir/wbarconfgen.sh n &> /dev/null

        # rofiselect
        $ScrDir/rofiselect.sh &> /dev/null &
        sleep 0.7
        pkill -x rofi

        # rofi
        if [ $roficn -lt 8 ] ; then
            roficn=$(( roficn + 1 ))
        else
            roficn=1
        fi
        cp $RofDir/styles/style_$roficn.rasi $RofDir/config.rasi
        $ScrDir/rofilaunch.sh &> /dev/null &
        sleep 0.7
        pkill -x rofi

        # wlogout
        wlogout -b 2 -c 0 -r 0 -L 930 -R 930 -T 300 -B 300 --protocol layer-shell &> /dev/null &
        sleep 0.7
        pkill -x wlogout

        # quickapps
        $ScrDir/quickapps.sh opera spotify code dolphin steam &> /dev/null &
        sleep 0.7
        pkill -x rofi

        # cliphist
        $ScrDir/cliphist.sh w &> /dev/null &
        sleep 0.7
        pkill -x rofi

        # wallselect
        $ScrDir/swwwallselect.sh &> /dev/null &
        sleep 0.7
        pkill -x rofi

        # volumecontrol
        for (( i=1 ; i<=6 ; i++ )) ; do
            [[ i -gt 3 ]] && vol="d" || vol="i"
            $ScrDir/volumecontrol.sh -o $vol
        done

    done
done < $ThemeCtl