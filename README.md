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
git clone https://github.com/napoleonmm83/frame
cd frame
npm install

sudo nano /var/www/frame/pics/index.php
````

For Fileuplod use simple-file-manager
https://github.com/gwendal-orinel/simple-file-manager

first change password

````
sudo nano /var/www/frame/pics/index.php
$PASSWORD = 'ch@ng3me123$'; //CHange to your password

````
it has also options to change for your needs

````
$allow_delete = true; // Set to false to disable delete button and delete POST request.
$delete_confirm = true; // Set to false to disable delete confirmation alert
$allow_upload = true; // Set to true to allow upload files
$allow_create_folder = true; // Set to false to disable folder creation
$allow_direct_link = true; // Set to false to only allow downloads and not direct link

````
change owner of folder pics

````
chown -R www-data:www-data /var/www/frame/pics

````

Configure Apache to 
````
sudo nano /etc/apache2/sites-enabled/000-default.conf

change 
DocumentRoot /var/www/html
 to
DocumentRoot /var/www/frame/pics

sudo /etc/init.d/apache2 restart
````

now you can open your raspberry ip ore hostname to browser to upload pictures




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

Enable restarting of the Framer script.

````
pm2 save
````
