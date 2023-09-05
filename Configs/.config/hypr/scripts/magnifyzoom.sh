#!/bin/bash

# get current zoom level
curZoom=$(hyprctl getoption misc:cursor_zoom_factor | grep float | awk '{print $2}')

# evaluate options
while getopts "id" option; do
    case $option in
        i ) # zoom in
            newZoom=$(echo "$curZoom + 0.1" | bc)
            hyprctl keyword misc:cursor_zoom_factor "$newZoom"
            ;;
        d ) # zoom out
            newZoom=$(echo "$curZoom - 0.1" | bc)
            hyprctl keyword misc:cursor_zoom_factor "$newZoom"
            ;;
        * ) # invalid option
            echo "i : zoom in"
            echo "d : zoom out"
            exit 1
            ;;
    esac
done