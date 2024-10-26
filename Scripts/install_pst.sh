#!/usr/bin/env bash
#|---/ /+--------------------------------------+---/ /|#
#|--/ /-| Script to apply post install configs |--/ /-|#
#|-/ /--| Prasanth Rangan                      |-/ /--|#
#|/ /---+--------------------------------------+/ /---|#

scrDir=$(dirname "$(realpath "$0")")
source "${scrDir}/global_fn.sh"
if [ $? -ne 0 ]; then
    echo "Error: unable to source global_fn.sh..."
    exit 1
fi

# sddm
if pkg_installed sddm; then

    echo -e "\033[0;32m[DISPLAYMANAGER]\033[0m detected // sddm"
    if [ ! -d /etc/sddm.conf.d ]; then
        sudo mkdir -p /etc/sddm.conf.d
    fi

    if [ ! -f /etc/sddm.conf.d/kde_settings.t2.bkp ]; then
        sudo tar -xzf ${cloneDir}/Source/arcs/Sddm_Astronaut.tar.gz -C /usr/share/sddm/themes/
        sudo touch /etc/sddm.conf.d/kde_settings.conf
        sudo cp /etc/sddm.conf.d/kde_settings.conf /etc/sddm.conf.d/kde_settings.t2.bkp
        sudo cp /usr/share/sddm/themes/Astronaut/kde_settings.conf /etc/sddm.conf.d/
    else
        echo -e "\033[0;33m[SKIP]\033[0m sddm is already configured..."
    fi

    # Set keyboard layout to es
    if [ ! -f /etc/X11/xorg.conf.d/00-keyboard.conf ] ; then
        sudo localectl set-x11-keymap es
    fi
else
    echo -e "\033[0;33m[WARNING]\033[0m sddm is not installed..."
fi

# dolphin
if pkg_installed dolphin && pkg_installed xdg-utils; then

    echo -e "\033[0;32m[FILEMANAGER]\033[0m detected // dolphin"
    xdg-mime default org.kde.dolphin.desktop inode/directory
    echo -e "\033[0;32m[FILEMANAGER]\033[0m setting" `xdg-mime query default "inode/directory"` "as default file explorer..."
    kmenuPath="$HOME/.local/share/kio/servicemenus"
    mkdir -p "${kmenuPath}"
    echo -e "[Desktop Entry]\nType=Service\nMimeType=image/png;image/jpeg;image/jpg;image/gif\nActions=Menu-Refresh\nX-KDE-Submenu=Set As Wallpaper..." > "${kmenuPath}/hyprluxwallpaper.desktop"
    echo -e "\n[Desktop Action Menu-Refresh]\nName=.: Refresh List :.\nExec=${HyprdotsDir}/scripts/swwwallkon.sh" >> "${kmenuPath}/hyprluxwallpaper.desktop"
    chmod +x "${kmenuPath}/hyprluxwallpaper.desktop"

else
    echo -e "\033[0;33m[WARNING]\033[0m dolphin is not installed..."
fi

# gparted
#if pkg_installed gparted
#    then
#    sudo sed -i "Exec=/usr/bin/gparted %f/c\Exec=sudo -E /usr/bin/gparted" /usr/share/applications/gparted.desktop
#    sudo sh -c "echo '$(whoami) ALL=NOPASSWD:SETENV: /usr/bin/gparted' >> /etc/sudoers"
#else
#    echo -e "\033[0;33m[WARNING]\033[0m gparted is not installed..."
#fi

# cisco packet tracer
#if pkg_installed packettracer
#    then
#    sudo sed -i "Exec=/opt/packettracer/packettracer %f/c\Exec=env QT_QPA_PLATFORM=xcb /opt/packettracer/packettracer" /usr/share/applications/cisco-pt.desktop
#    
#else
#    echo -e "\033[0;33m[WARNING]\033[0m packettracer is not installed..."
#fi

# virtualbox
if pkg_installed virtualbox
  then

    if id -nGz "$USER" | grep -qzxF "vboxusers"; then
        sudo usermod -a -G vboxusers "$USER"

        echo "Added $USER successfully to the group vboxusers."
    else
        echo "User is already in vboxusers group, skipping..."
    fi
else
  echo -e "\033[0;33m[WARNING]\033[0m virtualbox is not installed..."
fi

# shell
"${scrDir}/restore_shl.sh"

# flatpak
if ! pkg_installed flatpak; then

    echo -e "\033[0;32m[FLATPAK]\033[0m flatpak application list..."
    awk -F '#' '$1 != "" {print "["++count"]", $1}' "${scrDir}/.extra/custom_flat.lst"
    prompt_timer 60 "Install these flatpaks? [Y/n]"
    fpkopt=${promptIn,,}

    if [ "${fpkopt}" = "y" ]; then
        echo -e "\033[0;32m[FLATPAK]\033[0m installing flatpaks..."
        "${scrDir}/.extra/install_fpk.sh"
    else
        echo -e "\033[0;33m[SKIP]\033[0m installing flatpaks..."
    fi

else
    echo -e "\033[0;33m[SKIP]\033[0m flatpak is already installed..."
fi
