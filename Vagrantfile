
Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-24.04"
  config.vm.box_version = "202510.26.0"
  config.vm.hostname = "devsecops-portfolio"

  # Forward application ports from the VM to Windows localhost
  config.vm.network "forwarded_port",
    guest: 3000, host: 3000, host_ip: "127.0.0.1", auto_correct: true

  config.vm.network "forwarded_port",
    guest: 4000, host: 4000, host_ip: "127.0.0.1", auto_correct: true

  config.vm.network "forwarded_port",
    guest: 8081, host: 8081, host_ip: "127.0.0.1", auto_correct: true

  # VMware Workstation resources
  config.vm.provider "vmware_desktop" do |vm|
    vm.vmx["memsize"] = "4096"
    vm.vmx["numvcpus"] = "2"
  end

  # Install Ansible inside the guest and run the playbook
  config.vm.provision "ansible_local" do |ansible|
    ansible.install = true
    ansible.playbook = "ansible/playbook.yml"
  end
end
