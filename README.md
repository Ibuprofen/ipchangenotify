ipchangenotify
==============

Sends out emails when public IP address has changed.

#### Install

`npm install`

#### Configure

1. `cp config.json.sample config.json`
1. Edit `config.json`!

#### Execute

`node app`

#### Setup Cron Job

1. `crontab -e`
1. `0,30 * * * * /path/to/node /path/to/app.js > /dev/null 2>&1` to run every half hour.


Enjoy!
