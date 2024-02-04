#!/bin/bash
#|---/ /+-------------------------------------+---/ /|#
#|--/ /-| Script to apply pre install configs |--/ /-|#
#|-/ /--| Ew4n1011/Prasanth Rangan            |-/ /--|#
#|/ /---+-------------------------------------+/ /---|#

source global_fn.sh
if [ $? -ne 0 ] ; then
    echo "Error: unable to source global_fn.sh, please execute from $(dirname "$(realpath "$0")")..."
    exit 1
fi


# grub
if pkg_installed grub && [ -f /boot/grub/grub.cfg ]
    then
    echo -e "\033[0;32m[BOOTLOADER]\033[0m detected // grub"

    if [ ! -f /etc/default/grub.t2.bkp ] && [ ! -f /boot/grub/grub.t2.bkp ]
        then
        echo -e "\033[0;32m[BOOTLOADER]\033[0m configuring grub..."
        sudo cp /etc/default/grub /etc/default/grub.t2.bkp
        sudo cp /boot/grub/grub.cfg /boot/grub/grub.t2.bkp

        if nvidia_detect
            then
            echo -e "\033[0;32m[BOOTLOADER]\033[0m nvidia detected, adding nvidia_drm.modeset=1 to boot option..."
            gcld=$(grep "^GRUB_CMDLINE_LINUX_DEFAULT=" "/etc/default/grub" | cut -d'"' -f2 | sed 's/\b nvidia_drm.modeset=.\b//g')
            sudo sed -i "/^GRUB_CMDLINE_LINUX_DEFAULT=/c\GRUB_CMDLINE_LINUX_DEFAULT=\"${gcld} nvidia_drm.modeset=1\"" /etc/default/grub
        fi

        if laptop_detect
            then
            echo -e "\033[0;32m[BOOTLOADER]\033[0m laptop detected, adding acpi_osi=Linux to boot option..."
            gcld=$(grep "^GRUB_CMDLINE_LINUX_DEFAULT=" "/etc/default/grub" | cut -d'"' -f2 | sed 's/\b i8042.nopnp=. i8042.dumbkbd=.\b//g')
            sudo sed -i "/^GRUB_CMDLINE_LINUX_DEFAULT=/c\GRUB_CMDLINE_LINUX_DEFAULT=\"${gcld} i8042.nopnp=1 i8042.dumbkbd=1\"" /etc/default/grub
        fi

        read -p "Apply grub theme? [Y/N] : " grubtheme
        case $grubtheme in
        Y|y) echo -e "\033[0;32m[BOOTLOADER]\033[0m Setting grub theme..."
            sudo tar -xzf ${CloneDir}/Source/arcs/Grub_Yorha.tar.gz -C /usr/share/grub/themes/
            sudo sed -i "/^GRUB_DEFAULT=/c\GRUB_DEFAULT=saved
            /^GRUB_GFXMODE=/c\GRUB_GFXMODE=1920x1080x32,auto
            /^#GRUB_THEME=/c\GRUB_THEME=\"/usr/share/grub/themes/yorha-1920x1080/theme.txt\"
            /^#GRUB_SAVEDEFAULT=true/c\GRUB_SAVEDEFAULT=true" /etc/default/grub ;;
        *) echo -e "\033[0;32m[BOOTLOADER]\033[0m: Skipping grub theme..." 
            sudo sed -i "s/^GRUB_THEME=/#GRUB_THEME=/g" /etc/default/grub ;;
        esac

        sudo grub-mkconfig -o /boot/grub/grub.cfg
    else
        echo -e "\033[0;32m[BOOTLOADER]\033[0m grub is already configured..."
    fi
fi


# systemd-boot
if pkg_installed systemd && nvidia_detect && [ $(bootctl status | awk '{if ($1 == "Product:") print $2}') == "systemd-boot" ]
    then
    echo -e "\033[0;32m[BOOTLOADER]\033[0m detected // systemd-boot"

    if [ $(ls -l /boot/loader/entries/*.conf.t2.bkp 2> /dev/null | wc -l) -ne $(ls -l /boot/loader/entries/*.conf 2> /dev/null | wc -l) ]
        then
        echo "nvidia detected, adding nvidia_drm.modeset=1 to boot option..."
        find /boot/loader/entries/ -type f -name "*.conf" | while read imgconf
        do
            sudo cp ${imgconf} ${imgconf}.t2.bkp
            sdopt=$(grep -w "^options" ${imgconf} | sed 's/\b quiet\b//g' | sed 's/\b splash\b//g' | sed 's/\b nvidia_drm.modeset=.\b//g')
            sudo sed -i "/^options/c${sdopt} quiet splash nvidia_drm.modeset=1" ${imgconf}
        done
    else
        echo -e "\033[0;33m[SKIP]\033[0m systemd-boot is already configured..."
    fi
fi


# pacman
if [ -f /etc/pacman.conf ] && [ ! -f /etc/pacman.conf.t2.bkp ]
    then
    echo -e "\033[0;32m[PACMAN]\033[0m adding extra spice to pacman..."

    sudo cp /etc/pacman.conf /etc/pacman.conf.t2.bkp
    sudo sed -i "/^#Color/c\Color\nILoveCandy
    /^#VerbosePkgLists/c\VerbosePkgLists
    /^#ParallelDownloads/c\ParallelDownloads = 5" /etc/pacman.conf
    sudo sed -i '/^#\[multilib\]/,+1 s/^#//' /etc/pacman.conf

    sudo pacman -Syyu
    sudo pacman -Fy

else
    echo -e "\033[0;33m[SKIP]\033[0m pacman is already configured..."
fi