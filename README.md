# frame

I Use DietPi as OS for my project.
https://dietpi.com/

After install Apche an PHP

````
sudo apt-get install -t stretch apache2 -y

````

````
sudo apt-get install -t stretch php7.0 php7.0-curl php7.0-gd php7.0-fpm php7.0-cli php7.0-opcache php7.0-json php7.0-mbstring php7.0-xml php7.0-zip php7.0-mysql -y

````

````
sudo apt-get install -t stretch libapache2-mod-php7.0 -y
````

Now Install XFCE Desktop wit dietpi-software

````
dietpi-software
````
Software Optimized ->  XFCE 

Set Desktop at autostart

````
dietpi-software
````

Dietpi-config -> 9 AutoStart Options -> 2 Automatic login(recomended) -> Exit

Install Node.js

Software Additional -> Node.js -> Install

Install Electron

````
npm i -D electron@latest
````

Install libc

````
sudo nano  /etc/apt/sources.list
Add: deb http://http.us.debian.org/debian/ testing non-free contrib main
apt-get update
apt-get install libc6-dev
````



Install Frame

````
sudo apt-get install git libnss3 libxss1
cd /var/www
cd frame
npm install
DISPLAY=:0 && npm start



````

Install PM2 using NPM

````
sudo npm install -g pm2
````

Starting PM2 on Boot
To make sure PM2 can do it's job when (re)booting your operating system, it needs to be started on boot. Luckily, PM2 has a handy helper for this.

````

pm2 startup
````

Make a start script.

````
cd ~
nano frame.sh
````

Add the following lines:

````
cd /var/www/frame
DISPLAY=:0 npm start
````

Save and close, using the commands CTRL-O and CTRL-X. Now make sure the shell script is executable by performing the following command:

````
chmod +x frame.sh
````

Starting your Frame with PM2

````
pm2 start frame.sh
````
