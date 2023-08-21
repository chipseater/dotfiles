#! /bin/bash

DOTFILES_DIR=$(pwd)

# Never prompt the user for sudo password during the whole process
echo "$(whoami) ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee "/etc/sudoers.d/dont-prompt-$(whoami)-for-sudo-password"

sudo pacman -Syu --noconfirm

# Installs yay
mkdir ~/temp
cd ~/temp
git clone https://aur.archlinux.org/yay-bin.git
cd yay-bin
echo y | makepkg -si

# Installs needed packages
yay -S $(cat $DOTFILES_DIR/package_list) --noconfirm

# Installs vim-plug
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'

# Moves the config files to where they belong
cp -r $DOTFILES_DIR/* ~/.config

# Sets up lightdm
sudo cat $DOTFILES_DIR/lightdm/lightdm.conf | sudo tee "/etc/lightdm/lightdm.conf" 
sudo cat $DOTFILES_DIR/lightdm/web-greeter.yml | sudo tee "/etc/lightdm/web-greeter.yml" 
mkdir /usr/share/backgrounds
cp $DOTFILES_DIR/lightdm/forest_wallpaper.jpg /usr/share/backgrounds/

# Installs gtk themes
cd ~/temp
git clone https://github.com/Fausto-Korpsvart/Everforest-GTK-Theme.git
mkdir ~/.themes
cp -r Everforest-GTK-Theme/themes/* ~/.themes/

# Removes xdg-desktop-portal-gnome so firefox does not takes a million years to launch
sudo pacman -R xdg-desktop-portal-gnome --noconfirm

# Installs my nvim plugins
nvim -c "so ~/.config/nvim/init.vim | PlugInstall | UpdateRemotePlugins | q! | q!"

sudo systemctl enable lightdm
sudo systemctl start lightdm &

# Remove the file to never prompt for sudo password
sudo rm /etc/sudoers.d/dont-prompt-$(whoami)-for-sudo-password

