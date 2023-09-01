#!/bin/bash
#|---/ /+----------------------------+---/ /|#
#|--/ /-| Script to configure system |--/ /-|#
#|-/ /--| Ew4n1011/Prasanth Rangan   |-/ /--|#
#|/ /---+----------------------------+/ /---|#

source global_fn.sh
if [ $? -ne 0 ] ; then
    echo "Error: unable to source global_fn.sh, please execute from $(dirname $(realpath $0))..."
    exit 1
fi

# sddm
if pkg_installed sddm
    then

    if [ ! -d /etc/sddm.conf.d ] ; then
        sudo mkdir -p /etc/sddm.conf.d
    fi

    if [ ! -f /etc/sddm/sddm.conf.d/kde_settings.t2.bkp ] ; then
        echo "configuring sddm..."
        sudo cp /etc/sddm.conf.d/kde_settings.conf /etc/sddm.conf.d/kde_settings.t2.bkp
        sudo cp /usr/share/sddm/themes/ittu/kde_settings.conf /etc/sddm.conf.d/
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

# grub
if pkg_installed grub
    then

    if [ ! -f /etc/default/grub.t2.bkp ] && [ ! -f /boot/grub/grub.t2.bkp ]
        then
        echo "configuring grub..."
        sudo cp /etc/default/grub /etc/default/grub.t2.bkp

        if nvidia_detect
            then
            sudo sed -i "/^GRUB_CMDLINE_LINUX_DEFAULT=/c\GRUB_CMDLINE_LINUX_DEFAULT=\"loglevel=3 quiet splash nvidia_drm.modeset=1\"" /etc/default/grub
        fi

        # fix laptop keyboard lag at boot
        if laptop_detect
            then
            sudo sed -i "/^GRUB_CMDLINE_LINUX_DEFAULT=/c\GRUB_CMDLINE_LINUX_DEFAULT=\"loglevel=3 quiet splash i8042.nopnp=1 i8042.dumbkbd=1\"" /etc/default/grub
        fi

        sudo sed -i "/^GRUB_DEFAULT=/c\GRUB_DEFAULT=saved
        /^GRUB_GFXMODE=/c\GRUB_GFXMODE=1920x1080x32,auto
        /^#GRUB_THEME=/c\GRUB_THEME=\"/boot/grub/themes/yorha-1920x1080/theme.txt\"
        /^#GRUB_SAVEDEFAULT=true/c\GRUB_SAVEDEFAULT=true" /etc/default/grub

        sudo cp /boot/grub/grub.cfg /boot/grub/grub.t2.bkp
        sudo grub-mkconfig -o /boot/grub/grub.cfg
    fi

else
    echo "WARNING: grub is not installed..."
fi


# dolphin
if pkg_installed dolphin && pkg_installed xdg-utils
    then
    xdg-mime default org.kde.dolphin.desktop inode/directory
    echo "setting" `xdg-mime query default "inode/directory"` "as default file explorer..."

else
    echo "WARNING: dolphin is not installed..."
fi


# virtualbox
if pkg_installed virtualbox
  then

  if (groups ewanl != vboxusers) then
    sudo usermod -a -G vboxusers ewanl
  else
    echo "User is already in vboxusers group, skipping..."
  fi
else
  echo "WARNING: virtualbox is not installed..."
fi


# zsh
if pkg_installed zsh
    then

    if [ "$SHELL" != "/usr/bin/zsh" ] ; then
        echo "changing shell to zsh..."
        chsh -s $(which zsh)
    fi

else
    echo "WARNING: zsh is not installed..."
fi