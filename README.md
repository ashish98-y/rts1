# rts1

have an ubuntu machine 

# install node and npm
 curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
 
 sudo apt-get install -y nodejs
 # verify node installation
 node -version
 # install git
 sudo apt-get install -y git
 # clone repo
 git clone https://github.com/ashish98-y/rts1.git
 # build and run app
 cd rts1/
 
 npm install
 
 node index.js
# ENSURE HIGH AVAILABILTY

# create an ami using this ubuntu machine
# create a launch configuration using this ami with user-data
  #!/bin/bash
  node /home/ubuntu/rts1/index.js
# setup an Auto launch group using this launch configuration exposed using an classic load balancer 

health check -> run on port 3000 path of file=/

