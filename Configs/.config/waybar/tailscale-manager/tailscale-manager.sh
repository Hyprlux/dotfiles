#!/usr/bin/env bash

SERVICE_NAME="tailscaled"
STATUS_CONNECTED_STR='{"text":"Connected","class":"connected","alt":"connected"}'
STATUS_DISCONNECTED_STR='{"text":"Disconnected","class":"disconnected","alt":"disconnected"}'

function askpass() {
  rofi -dmenu -password -no-fixed-num-lines -p "Sudo password : " -theme ~/.config/waybar/tailscale-manager/rofi.rasi 
}

function status_tailscale() {
  systemctl is-active $SERVICE_NAME >/dev/null 2>&1
  return $?
}

function toggle_tailscale() {
  status_tailscale && \
     SUDO_ASKPASS=~/.config/waybar/tailscale-manager/tailscale-manager.sh sudo -A systemctl stop $SERVICE_NAME || \
     SUDO_ASKPASS=~/.config/waybar/tailscale-manager/tailscale-manager.sh sudo -A systemctl start $SERVICE_NAME
}

case $1 in
  -s | --status)
    status_tailscale && echo $STATUS_CONNECTED_STR || echo $STATUS_DISCONNECTED_STR
    ;;
  -t | --toggle)
    toggle_tailscale
    ;;
  *)
    askpass
    ;;
esac
