###### _<div align="right"><sub>// design by t2</sub></div>_

> [!IMPORTANT]
> This is a fork of [prasanthrangan](https://github.com/prasanthrangan)'s [hyprdots](https://github.com/prasanthrangan/hyprdots) repo, with some of my own tweaks. Be sure to check out his repo, it's very cool and well done!

<div align="center">

![hyde_banner](https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/hyde_banner.png)

<br>

<a href="#installation"><kbd> <br> Installation <br> </kbd></a>&ensp;&ensp;
<a href="#themes"><kbd> <br> Themes <br> </kbd></a>&ensp;&ensp;
<a href="#styles"><kbd> <br> Styles <br> </kbd></a>&ensp;&ensp;
<a href="#keybindings"><kbd> <br> Keybindings <br> </kbd></a>&ensp;&ensp;

</div><br><br>

https://github.com/Ew4n1011/Hyprlux/assets/106020512/7f8fadc8-e293-4482-a851-e9c6464f5265

<br><div align="center"><img width="12%" src="Source/assets/Arch.svg"/><br></div>

<a id="installation"></a>  
<img src="Source/assets/Installation.gif" width="200"/>

The installation script is designed for a minimal [Arch Linux](https://wiki.archlinux.org/title/Arch_Linux) install, but **may** work on some [Arch-based distros](https://wiki.archlinux.org/title/Arch-based_distributions).
While installing dotfiles alongside another [DE](https://wiki.archlinux.org/title/Desktop_environment)/[WM](https://wiki.archlinux.org/title/Window_manager) should work, due to it being a heavily customized setup, it **will** conflict with your [GTK](https://wiki.archlinux.org/title/GTK)/[Qt](https://wiki.archlinux.org/title/Qt) theming, [Shell](https://wiki.archlinux.org/title/Command-line_shell), [SDDM](https://wiki.archlinux.org/title/SDDM), [GRUB](https://wiki.archlinux.org/title/GRUB), etc. and is at your own risk.

> [!IMPORTANT]
> The install script will auto-detect an NVIDIA card and install nvidia-dkms drivers for your kernel.
> Please ensure that your NVIDIA card supports dkms drivers in the list provided [here](https://wiki.archlinux.org/title/NVIDIA).

> [!CAUTION]
> The script modifies your `grub` or `systemd-boot` config to enable NVIDIA DRM.

To install, execute the following commands:

```shell
pacman -S --needed git base-devel
git clone --depth 1 https://github.com/Ew4n1011/Hyprlux ~/hyprlux
cd ~/hyprlux/Scripts
./install.sh
```

> [!TIP]
> You can also add any other apps you wish to install alongside dotfiles to `Scripts/custom_apps.lst` and pass the file as a parameter to install it like so:
>
> ```shell
> ./install.sh custom_apps.lst
> ```

<a id="updating"></a>  
<img src="Source/assets/Updating.gif" width="200"/>

To update dotfiles, you will need to pull the latest changes from GitHub and restore the configs by running the following commands:

```shell
cd ~/hyprlux/Scripts
git pull
./install.sh -r
```

> [!IMPORTANT]
> Please note that any configurations you made will be overwritten if listed to be done so as listed by `Scripts/restore_cfg.lst`.
> However, all replaced configs are backed up and may be recovered from in `~/.config/cfg_backups`.

<div align="right">
  <br>
  <a href="#-design-by-t2"><kbd> <br> 🡅 <br> </kbd></a>
</div>

<a id="themes"></a>  
<img src="Source/assets/Themes.gif" width="200"/>

All our official themes are stored in a separate repository, allowing users to install them using themepatcher.
For more information, visit [Ew4n1011/Hyprlux-themes](https://github.com/Ew4n1011/Hyprlux-themes).

<div align="center">
  <table><tr><td>

[![Catppuccin-Latte](https://placehold.co/130x30/dd7878/eff1f5?text=Catppuccin-Latte&font=Oswald)](https://github.com/Ew4n1011/Hyprlux-themes/tree/Catppuccin-Latte)
[![Catppuccin-Mocha](https://placehold.co/130x30/b4befe/11111b?text=Catppuccin-Mocha&font=Oswald)](https://github.com/Ew4n1011/Hyprlux-themes/tree/Catppuccin-Mocha)
[![Decay-Green](https://placehold.co/130x30/90ceaa/151720?text=Decay-Green&font=Oswald)](https://github.com/Ew4n1011/Hyprlux-themes/tree/Decay-Green)
[![Gruvbox-Retro](https://placehold.co/130x30/475437/B5CC97?text=Gruvbox-Retro&font=Oswald)](https://github.com/Ew4n1011/Hyprlux-themes/tree/Gruvbox-Retro)
[![Rosé-Pine](https://placehold.co/130x30/c4a7e7/191724?text=Rosé-Pine&font=Oswald)](https://github.com/Ew4n1011/Hyprlux-themes/tree/Rose-Pine)
[![Tokyo-Night](https://placehold.co/130x30/7aa2f7/24283b?text=Tokyo-Night&font=Oswald)](https://github.com/Ew4n1011/Hyprlux-themes/tree/Tokyo-Night)

  </td></tr></table>
</div>

<div align="right">
  <br>
  <a href="#-design-by-t2"><kbd> <br> 🡅 <br> </kbd></a>
</div>

<a id="styles"></a>  
<img src="Source/assets/Styles.gif" width="200"/>

<div align="center"><table><tr>Theme Select</tr><tr><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/theme_select_1.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/theme_select_2.png"/></td></tr></table></div>

<div align="center"><table><tr><td>Wallpaper Select</td><td>Launcher Select</td></tr><tr><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/walls_select.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/rofi_style_sel.png"/></td></tr>
<tr><td>Wallbash Modes</td><td>Notification Action</td></tr><tr><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/wb_mode_sel.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/notif_action_sel.png"/></td></tr>
</table></div>

<div align="center"><table><tr>Rofi Launcher</tr><tr><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/rofi_style_1.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/rofi_style_2.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/rofi_style_3.png"/></td></tr><tr><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/rofi_style_4.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/rofi_style_5.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/rofi_style_6.png"/></td></tr><tr><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/rofi_style_7.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/rofi_style_8.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/rofi_style_9.png"/></td></tr><tr><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/rofi_style_10.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/rofi_style_11.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/rofi_style_12.png"/></td></tr>
</table></div>

<div align="center"><table><tr>Wlogout Menu</tr><tr><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/wlog_style_1.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/wlog_style_2.png"/></td></tr></table></div>

<div align="center"><table><tr>Game Launcher</tr><tr><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/game_launch_1.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/game_launch_2.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/game_launch_3.png"/></td></tr></table></div>
<div align="center"><table><tr><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/game_launch_4.png"/></td><td>
<img src="https://raw.githubusercontent.com/Ew4n1011/Hyprlux/Hyprlux/Source/assets/game_launch_5.png"/></td></tr></table></div>

<div align="right">
  <br>
  <a href="#-design-by-t2"><kbd> <br> 🡅 <br> </kbd></a>
</div>

<a id="keybindings"></a>  
<img src="Source/assets/Keybindings.gif" width="200"/>

<div align="center">

| Keys                                                                                                     | Action                                                            |
| :------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| <kbd>Super</kbd> + <kbd>Q</kbd><br><kbd>Alt</kbd> + <kbd>F4</kbd>                                        | Close focused window                                              |
| <kbd>Super</kbd> + <kbd>Del</kbd>                                                                        | Kill Hyprland session                                             |
| <kbd>Super</kbd> + <kbd>W</kbd>                                                                          | Toggle the window between focus and float                         |
| <kbd>Super</kbd> + <kbd>G</kbd>                                                                          | Toggle the window between focus and group                         |
| <kbd>Super</kbd> + <kbd>slash</kbd>                                                                      | Launch keybinds hint                                              |
| <kbd>Alt</kbd> + <kbd>Enter</kbd>                                                                        | Toggle the window between focus and fullscreen                    |
| <kbd>Super</kbd> + <kbd>L</kbd>                                                                          | Launch lock screen                                                |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>                                                       | Toggle pin on focused window                                      |
| <kbd>Super</kbd> + <kbd>Backspace</kbd>                                                                  | Launch logout menu                                                |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>W</kbd>                                                          | Toggle waybar                                                     |
| <kbd>Super</kbd> + <kbd>Enter</kbd>                                                                      | Launch terminal emulator (kitty)                                  |
| <kbd>Super</kbd> + <kbd>E</kbd>                                                                          | Launch file manager (dolphin)                                     |
| <kbd>Super</kbd> + <kbd>C</kbd>                                                                          | Launch text editor (vscode)                                       |
| <kbd>Super</kbd> + <kbd>F</kbd>                                                                          | Launch web browser (firefox)                                      |
| <kbd>Super</kbd> + <kbd>S</kbd>                                                                          | Launch music player (spotify)                                     |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd>                                                      | Launch system monitor (htop/btop or fallback to top)              |
| <kbd>Super</kbd> + <kbd>O</kbd>                                                                          | Launch application launcher (rofi)                                |
| <kbd>Super</kbd> + <kbd>Tab</kbd>                                                                        | Launch window switcher (rofi)                                     |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd>                                                       | Launch file explorer (rofi)                                       |
| <kbd>F10</kbd>                                                                                           | Toggle audio mute                                                 |
| <kbd>F11</kbd>                                                                                           | Decrease volume                                                   |
| <kbd>F12</kbd>                                                                                           | Increase volume                                                   |
| <kbd>Super</kbd> + <kbd>Shift</kbd> <kbd>S</kbd>                                                         | Partial screenshot capture                                        |
| <kbd>Super</kbd> + <kbd>Ctrl</kbd> + <kbd>P</kbd>                                                        | Partial screenshot capture (frozen screen)                        |
| <kbd>Super</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd>                                                         | Monitor screenshot capture                                        |
| <kbd>PrtScn</kbd>                                                                                        | All monitors screenshot capture                                   |
| <kbd>Super</kbd> + <kbd>Alt</kbd> + <kbd>G</kbd>                                                         | Disable hypr effects for gamemode                                 |
| <kbd>Super</kbd> + <kbd>Alt</kbd> + <kbd>→</kbd><kbd>←</kbd>                                             | Cycle wallpaper                                                   |
| <kbd>Super</kbd> + <kbd>Alt</kbd> + <kbd>↑</kbd><kbd>↓</kbd>                                             | Cycle waybar mode                                                 |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>                                                       | Launch wallbash mode select menu (rofi)                           |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd>                                                       | Launch theme select menu (rofi)                                   |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd>                                                       | Launch style select menu (rofi)                                   |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>                                                       | Launch theme style select menu (rofi)                             |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd>                                                       | Launch wallpaper select menu (rofi)                               |
| <kbd>Super</kbd> + <kbd>V</kbd>                                                                          | Launch clipboard (rofi)                                           |
| <kbd>Super</kbd> + <kbd>K</kbd>                                                                          | Switch keyboard layout                                            |
| <kbd>Super</kbd> + <kbd>←</kbd><kbd>→</kbd><kbd>↑</kbd><kbd>↓</kbd>                                      | Move window focus                                                 |
| <kbd>Alt</kbd> + <kbd>Tab</kbd>                                                                          | Change window focus                                               |
| <kbd>Super</kbd> + <kbd>[0-9]</kbd>                                                                      | Switch workspaces                                                 |
| <kbd>Super</kbd> + <kbd>Ctrl</kbd> + <kbd>←</kbd><kbd>→</kbd>                                            | Switch workspaces to a relative workspace                         |
| <kbd>Super</kbd> + <kbd>Ctrl</kbd> + <kbd>↓</kbd>                                                        | Move to the first empty workspace                                 |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>←</kbd><kbd>→</kbd><kbd>↑</kbd><kbd>↓</kbd>                   | Resize windows                                                    |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>[0-9]</kbd>                                                   | Move focused window to a relative workspace                       |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>←</kbd><kbd>→</kbd><kbd>↑</kbd><kbd>↓</kbd> | Move focused window (tiled/floating) around the current workspace |
| <kbd>Super</kbd> + <kbd>MouseScroll</kbd>                                                                | Scroll through existing workspaces                                |
| <kbd>Super</kbd> + <kbd>LeftClick</kbd><br><kbd>Super</kbd> + <kbd>Z</kbd>                               | Move focused window                                               |
| <kbd>Super</kbd> + <kbd>RightClick</kbd><br><kbd>Super</kbd> + <kbd>X</kbd>                              | Resize focused window                                             |
| <kbd>Super</kbd> + <kbd>Alt</kbd> + <kbd>S</kbd>                                                         | Move/Switch to special workspace (scratchpad)                     |
| <kbd>Super</kbd> + <kdb>Shift</kbd> + <kbd>S</kbd>                                                       | Toggle to special workspace                                       |
| <kbd>Super</kbd> + <kbd>J</kbd>                                                                          | Toggle focused window split                                       |
| <kbd>Super</kbd> + <kbd>Alt</kbd> + <kbd>[0-9]</kbd>                                                     | Move focused window to a workspace silently                       |
| <kbd>Super</kbd> + <kbd>Ctrl</kbd> + <kbd>H</kbd>                                                        | Move between grouped windows backward                             |
| <kbd>Super</kbd> + <kbd>Ctrl</kbd> + <kbd>L</kbd>                                                        | Move between grouped windows forward                              |

</div>

<div align="right">
  <br>
  <a href="#-design-by-t2"><kbd> <br> 🡅 <br> </kbd></a>
</div>
