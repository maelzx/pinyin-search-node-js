I'm using node-cc-cedict module, but because of it contains bugs and doesn't have the functionality that I wanted to use, 
I had to resort on this more manual/classic ways.

This is basically, just a simple page, where you enter your pin yin text (eg: ni hao), hit the search button, then it will
return the chinese text, pronounciation & its definition.

This is not perfect yet. I would say this is a beta stage, just to test its functionality & playing around with nodejs/express

Please follow this steps:

1 - create a directory
2 - cd into the created directory
3 - run command "npm init"
4 - use the default (enter for all)
5 - run command "npm install express --save"
6 - run command "npm install pug --save"
7 - run command "npm install node-cc-cedict"
8 - run command "npm install body-parser --save"
9 - copy and paste/replace files from this repo into the directory
10 - run command "node app.js"
11 - open your browser and open up "http://localhost:3000"
12 - enjoy!


Future plan:
1 - Change to use MySQL and use the full text search instead, in order to get better reseult. Currently it's just doing
simple equal checking, which is not what I have in mind.
2 - have a better UI.
