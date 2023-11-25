#!/bin/bash
#|---/ /+------------------------------------+---/ /|#
#|--/ /-| Script to generate wallpaper cache |--/ /-|#
#|-/ /--| Kemipso                            |-/ /--|#
#|/ /---+------------------------------------+/ /---|#

source global_fn.sh
if [ $? -ne 0 ] ; then
    echo "Error: unable to source global_fn.sh, please execute from $(dirname $(realpath $0))..."
    exit 1
fi

if ! pkg_installed imagemagick || ! pkg_installed parallel 
then
    echo "ERROR : dependency failed, imagemagick/parallel is not installed..."
    exit 0
fi

# set variables
ctlFile="$HOME/.config/hypr/theme.ctl"
ctlLine=`grep '^1|' $ctlFile`
export cacheDir="$HOME/.config/swww/.cache"

# evaluate options
while getopts "fc" option ; do
    case $option in
    f ) # force remove cache
        rm -Rf ${cacheDir}
        echo "Cache dir ${cacheDir} cleared...";;
    c ) # use custom wallpaper
        shift $((OPTIND -1))
        inWall="$1"
        if [[ "${inWall}" == '~'* ]]; then
            inWall="$HOME${inWall:1}"
        fi
        if [[ -f "${inWall}" ]] ; then
            if [ `echo "$ctlLine" | wc -l` -eq "1" ] ; then
                curTheme=$(echo "$ctlLine" | cut -d '|' -f 2)
                awk -F '|' -v thm="${curTheme}" -v wal="${inWall}" '{OFS=FS} {if($2==thm)$NF=wal;print$0}' "${ThemeCtl}" > /tmp/t2 && mv /tmp/t2 "${ThemeCtl}"
            else
                echo "ERROR : $ctlFile Unable to fetch theme..."
                exit 1
            fi
        else
            echo "ERROR: wallpaper $1 not found..."
            exit 1
        fi ;;
    * ) # invalid option
    	echo "...valid options are..."
        echo "./create_cache.sh -f                      # force create thumbnails (delete old cache)"
        echo "./create_cache.sh -c /path/to/wallpaper   # generate cache for custom walls"
        exit 1 ;;
    esac
done

# magick function
imagick_t2 () {
    theme="$1"
    wpFullName="$2"
    wpBaseName=$(basename "${wpFullName}")

    if [ ! -f "${cacheDir}/${theme}/${wpBaseName}" ]; then
        convert "${wpFullName}" -thumbnail 500x500^ -gravity center -extent 500x500 "${cacheDir}/${theme}/${wpBaseName}"
    fi

    if [ ! -f "${cacheDir}/${theme}/${wpBaseName}.rofi" ]; then
        convert -strip -resize 2000 -gravity center -extent 2000 -quality 90 "${wpFullName}" "${cacheDir}/${theme}/${wpBaseName}.rofi"
    fi

    if [ ! -f "${cacheDir}/${theme}/${wpBaseName}.blur" ]; then
        convert -strip -scale 10% -blur 0x3 -resize 100% "${wpFullName}" "${cacheDir}/${theme}/${wpBaseName}.blur"
    fi

    if [ ! -f "${cacheDir}/${theme}/${wpBaseName}.dcol" ]; then
        magick "${wpFullName}" -colors 4 -define histogram:unique-colors=true -format "%c" histogram:info: > "${cacheDir}/${theme}/${wpBaseName}.dcol"
    fi
}


# create thumbnails for each theme > wallpapers
export -f imagick_t2
while read ctlLine
do
    theme=$(echo $ctlLine | awk -F '|' '{print $2}')
    fullPath=$(echo "$ctlLine" | awk -F '|' '{print $NF}'| sed "s+~+$HOME+")
    wallPath=$(dirname "$fullPath")
    mkdir -p ${cacheDir}/${theme}

    mapfile -d '' wpArray < <(find "${wallPath}" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0 | sort -z)
    echo "Creating thumbnails for ${theme} [${#wpArray[@]}]"
    parallel --bar imagick_t2 ::: "${theme}" ::: "${wpArray[@]}"
done < $ctlFile