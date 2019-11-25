# rts1

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
