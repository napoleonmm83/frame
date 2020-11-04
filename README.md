# frame



To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/napoleonmm83/frame
# Go into the repository
cd frame
# Install dependencies
npm install
# Run the app
npm start
```



## copy firebase.json to Raspberry
```bash
scp friebase.json pi@192.168.1.3:frame
```


```bash

cd /home/pi/frame
export DISPLAY=:0
npm start



@reboot sh /home/pi/frame.sh

```



## License

[CC0 1.0 (Public Domain)](LICENSE.md)
