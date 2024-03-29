<div id="top"></div>
<!--
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
 -->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Frame</h3>

  <p align="center">
    An awesome digital picture gallery with raspberry pi!
    <br />  
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Frame is a digital picture gallery with the possibility to manage the pictures with a firebase cloud storage.

The gallery is running on a raspberry pi and is a small electron app.

Later i will open a other repository with the server side code to upload the pictures.



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Electron.js](https://www.electronjs.org/)
* [Firebase](https://firebase.google.com/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is a step by step instructions guide for the installation of frame on your raspberry pi.

### Prerequisites

Install Raspberry Pi OS using Raspberry Pi Imager.
Raspberry Pi Imager is the quick and easy way to install Raspberry Pi OS and other operating systems to a microSD card, ready to use with your Raspberry Pi.

<p align="right">(<a href="https://www.raspberrypi.com/software/">Raspberry Pi OS</a>)</p>

Install NPM an Git on your raspberry pi



  * node js
    ```sh
    curl -sSL https://deb.nodesource.com/setup_16.x | sudo bash -
    sudo apt install -y nodejs
    ```

  * git
    ```sh
    sudo apt update
    sudo apt install git
    ```
  * Update the Raspberry Pi OS
    ```sh
    sudo apt update
    sudo apt upgrade
    ```

### Installation

_Below is the guide to install frame._

1. Clone the repo
   ```sh
   cd /home/pi
   git clone https://github.com/napoleonmm83/frame.git
   cd frame
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Generate a private key file for your service account.

      3.1 In the Firebase console, open Settings > Service Accounts.

      3.2 Click Generate New Private Key, then confirm by clicking Generate Key.

      3.3 Securely store the JSON file containing the key.

4. Add private key to frame

    Rename the json file to firebase.json.

    _This is working with Windows CMD. Replace ip with your rasperry ip._

  ```sh
  scp firebase.json pi@192.168.xx.xx:frame
  ```

5. Edit preload.js and replace storageBucket with your Firebase Storage Bucket name

  ```sh
  initializeApp({
   credential: cert(serviceAccount),
   storageBucket: 'xxx.appspot.com'
  });

  ```

6. Prepare Autostart and disable screensaver.

  ```sh
  sudo apt install x11-xserver-utils xscreensaver unclutter

  ```

  Edit /etc/xdg/lxsession/LXDE-pi/autostart

  ```sh
  @xset s off
  @xset -dpms
  @xset s noblank
  @xscreensaver -no-splash
  @sh /home/pi/frame/framestarter.sh

  ```


<p align="right">(<a href="#top">back to top</a>)</p>








<!-- CONTACT
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>

 -->





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: asset/screenshot.png
