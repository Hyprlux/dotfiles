#!/bin/bash

vencord-desktop --start-minimized &
sleep 1
wmctrl -c "vencord-desktop"