#!/bin/bash
#|---/ /+--------------------------------------+---/ /|#
#|--/ /-| Script to apply post install configs |--/ /-|#
#|-/ /--| Prasanth Rangan                      |-/ /--|#
#|/ /---+--------------------------------------+/ /---|#

source global_fn.sh
if [ $? -ne 0 ] ; then
    echo "Error: unable to source global_fn.sh, please execute from $(dirname "$(realpath "$0")")..."
    exit 1
fi


# sddm
if pkg_installed sddm
    then

    if [ ! -d /etc/sddm.conf.d ] ; then
        sudo mkdir -p /etc/sddm.conf.d
    fi

    if [ ! -f /etc/sddm.conf.d/kde_settings.t2.bkp ] ; then
        echo "configuring sddm..."
        sudo tar -xzf ${CloneDir}/Source/arcs/Sddm_Ittu.tar.gz -C /usr/share/sddm/themes/

        if [ -f /etc/sddm.conf.d/kde_settings.conf ] ; then
            sudo cp /etc/sddm.conf.d/kde_settings.conf /etc/sddm.conf.d/kde_settings.t2.bkp
        fi
        sudo cp /usr/share/sddm/themes/ittu/kde_settings.conf /etc/sddm.conf.d/
        setfacl -m u:sddm:x /home/${USER}
    else
        echo "sddm is already configured..."
    fi

    if [ ! -f /usr/share/sddm/themes/ittu/components/artwork/gifs/${USER}.gif ] ; then
        sudo cp $(find /usr/share/sddm/themes/ittu/components/artwork/gifs -name "*.gif" | sort -R | head -1) /usr/share/sddm/themes/ittu/components/artwork/gifs/${USER}.gif
        echo "avatar set for ${USER}..."
    fi

    # Set keyboard layout to es
    if [ ! -f /etc/X11/xorg.conf.d/00-keyboard.conf ] ; then
        sudo localectl set-x11-keymap es
    fi
else
    echo "WARNING: sddm is not installed..."
fi


# dolphin
if pkg_installed dolphin && pkg_installed xdg-utils
    then

    xdg-mime default org.kde.dolphin.desktop inode/directory
    echo "setting" `xdg-mime query default "inode/directory"` "as default file explorer..."

else
    echo "WARNING: dolphin is not installed..."
fi

# swappy
if pkg_installed swappy
    then
    xdg-mime default swappy.desktop image/png
    xdg-mime default swappy.desktop image/jpeg
    echo "setting" `xdg-mime query default "image/png"` "as default image viewer (png)..."
    echo "setting" `xdg-mime query default "image/jpeg"` "as default image viewer (jpeg)..."
else
    echo "WARNING: swappy is not installed..."
fi

# gparted
if pkg_installed gparted
    then
    sudo sed -i "Exec=/usr/bin/gparted %f/c\Exec=sudo -E /usr/bin/gparted" /usr/share/applications/gparted.desktop
    sudo sh -c "echo '$(whoami) ALL=NOPASSWD:SETENV: /usr/bin/gparted' >> /etc/sudoers"
else
    echo "WARNING: gparted is not installed..."
fi

# cisco packet tracer
if pkg_installed packettracer
    then
    sudo sed -i "Exec=/opt/packettracer/packettracer %f/c\Exec=env QT_QPA_PLATFORM=xcb /opt/packettracer/packettracer" /usr/share/applications/cisco-pt.desktop
    
else
    echo "WARNING: packettracer is not installed..."
fi

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
  echo "WARNING: virtualbox is not installed..."
fi

# shell
./restore_shl.sh ${getShell}