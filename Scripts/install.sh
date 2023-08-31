#!/bin/bash
#|---/ /+--------------------------+---/ /|#
#|--/ /-| Main installation script |--/ /-|#
#|-/ /--| Ew4n1011/Prasanth Rangan |-/ /--|#
#|/ /---+--------------------------+/ /---|#

#--------------------------------#
# import variables and functions #
#--------------------------------#
source global_fn.sh
if [ $? -ne 0 ] ; then
    echo "Error: unable to source global_fn.sh, please execute from $(dirname $(realpath $0))..."
    exit 1
fi

#------------------#
# evaluate options #
#------------------#
flg_Install=0
flg_Restore=0
flg_Service=0

while getopts idrs RunStep
do
    case $RunStep in
    i) flg_Install=1 ;;
    d) flg_Install=1
        export use_default="--noconfirm" ;;
    r) flg_Restore=1 ;;
    s) flg_Service=1 ;;
    *)  echo "...valid options are..."
        echo "i : [i]nstall hyprland without configs"
        echo "r : [r]estore config files"
        echo "s : start system [s]ervices"   
        exit 1 ;;
    esac
done

if [ $OPTIND -eq 1 ] ; then
    flg_Install=1
    flg_Restore=1
    flg_Service=1
fi


#------------#
# installing #
#------------#
if [ $flg_Install -eq 1 ] ; then
cat << "EOF"

 _         _       _ _ _         
|_|___ ___| |_ ___| | |_|___ ___ 
| |   |_ -|  _| .'| | | |   | . |
|_|_|_|___|_| |__,|_|_|_|_|_|_  |
                            |___|

EOF

    #----------------------#
    # prepare package list #
    #----------------------#
    shift $((OPTIND -1))
    cust_pkg=$1
    cp custom_hypr.lst install_pkg.lst

    if [ -f "$cust_pkg" ] && [ ! -z "$cust_pkg" ] ; then
        cat $cust_pkg >> install_pkg.lst
    fi

    #-----------------------------#
    # add gpu drivers to the list #
    #-----------------------------#
    if nvidia_detect ; then

        cat /usr/lib/modules/*/pkgbase | while read krnl
        do
            echo "${krnl}-headers" >> install_pkg.lst
        done

        echo -e "\nnvidia-dkms\nnvidia-utils" >> install_pkg.lst
        sed -i "s/^hyprland-git/hyprland-nvidia-git/g" install_pkg.lst

    elif amd_detect ; then
    
        echo -e "\nvulkan-radeon" >> install_pkg.lst

    else
        echo "nvidia/amd card not detected, installing intel drivers..."

        echo -e "\nvulkan-intel" >> install_pkg.lst
    fi

    #--------------------------------#
    # install packages from the list #
    #--------------------------------#
    ./install_pkg.sh install_pkg.lst
    rm install_pkg.lst

    #--------------------#
    # install oh-my-zsh  #
    #--------------------#

    if [ ! -d "$HOME/.oh-my-zsh" ] ; then
        echo "installing oh-my-zsh..."

        sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

        #----------------------------#
        # install oh-my-zsh plugins  #
        #----------------------------#

        git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
        git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
        git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
    else
        echo "oh-my-zsh already installed, skipping..."
    fi
fi

#---------------------------#
# restore my custom configs #
#---------------------------#
if [ $flg_Restore -eq 1 ] ; then
cat << "EOF"

             _           _         
 ___ ___ ___| |_ ___ ___|_|___ ___ 
|  _| -_|_ -|  _| . |  _| |   | . |
|_| |___|___|_| |___|_| |_|_|_|_  |
                              |___|

EOF
    ./restore_fnt.sh
    ./restore_cfg.sh
fi


#------------------------#
# enable system services #
#------------------------#
if [ $flg_Service -eq 1 ] ; then
cat << "EOF"

                 _             
 ___ ___ ___ _ _|_|___ ___ ___ 
|_ -| -_|  _| | | |  _| -_|_ -|
|___|___|_|  \_/|_|___|___|___|

EOF

    service_ctl NetworkManager
    service_ctl bluetooth
    service_ctl sddm
fi
