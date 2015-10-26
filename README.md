# clusterdemo-server
CouchDB/Cloudant demo cluster server to start/stop node, flash lights, etc.

## Usage
Runs on http://127.0.0.1:4730
* Use /start to start local CouchDB
* Use /stop to stop local CouchDB
* Use /flash to flash the lights
* CORS enabled!

## Setup
* Download repo
* Install NPM modules
* Copy clusterdemo-server to /etc/init.d

* OR: Use Ansible with 'ansible-playbook install-clusterdemo-server.yml -f <NODES>'
