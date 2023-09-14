#!/bin/bash

SUDO_ASKPASS=~/.config/waybar/tailscale-manager/tailscale-manager.sh

function askpass() {
    rofi -dmenu -password -no-fixed-num-lines -p "Sudo password: " -theme ~/.config/waybar/tailscale-manager/rofi.rasi
}

function tailscale_status() {
    TAILSCALE_STATUS=$(tailscale status -json | jq -r '.Self.Online')

    if [ "$TAILSCALE_STATUS" == "true" ]; then
        echo '{"text":"Connected","class":"connected","alt":"connected"}'
    else
        echo '{"text":"Disconnected","class":"disconnected","alt":"disconnected"}'
    fi
}

function toggle_tailscale() {
    TAILSCALE_STATUS=$(tailscale status -json | jq -r '.Self.Online')
    
    if [ "$TAILSCALE_STATUS" == "true" ]; then
        SUDO_ASKPASS="$SUDO_ASKPASS" sudo -A tailscale down
    else
        SUDO_ASKPASS="$SUDO_ASKPASS" sudo -A tailscale up & disown
    fi
}

case "$1" in
    -s | --status)
        tailscale_status
        ;;
    -t | --toggle)
        toggle_tailscale
        ;;
    *)
        askpass
        ;;
esac