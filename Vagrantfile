# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.define "dotfiles" do
    config.vm.box = "archlinux/archlinux"
    config.vm.network "private_network", ip: "172.30.1.5"
    config.ssh.insert_key = false
  
    config.vm.provider "virtualbox" do |vb|
      # Display the VirtualBox GUI when booting the machine
      vb.gui = true
  
      # Customize the amount of memory on the VM:
      vb.memory = "4096"

      # Customize the number of CPUs on the VM:
      vb.cpus = 2
    end

    config.vm.provision "shell", inline: <<-SHELL
      pacman -Syu --noconfirm
      bash /vagrant/Scripts/install.sh
    SHELL
  end
end