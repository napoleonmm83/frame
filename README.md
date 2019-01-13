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

Install Frame

````
cd /var/www


````
