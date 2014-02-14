I Am The Answer
============

#### Prologue ####

"I Am The Answer" is a famous dialogue from the Malayalam cult comedy movie *[Mazha Peyyunnu Maddhalam Kottunnu](http://en.wikipedia.org/wiki/Mazha_Peyyunnu_Maddalam_Kottunnu)* directed by Priyadarshan. There will be only very few Malayalees(people from the state of Kerala in India) who would not have seen that movie. The YouTube link of that famous scene is available [here](http://www.youtube.com/watch?v=B2tRL7r3uSE).

The intention of this project is to be a database of Malayalam Movie Dialogues like an IMDb is for Movies. This is a small step, starting with Malayalam language, but can be enhanced for other languages as well and hence I intend to make this as an open source project. 

#### Backend ####

I Am The Answer is a web application which is depended on another Open Source Product [DAAS](https://github.com/bbytes/DAAS), from my company Beyond Bytes Technologies. DAAS is the layer that sits on top of a GraphDB for storage. DAAS supports schemaless data storage using REST api. It has security layer using OAuth 2.0.

#### Frontend ####

This web application is built using NodeJS, AngularJS, Jade Templates and has used Yeoman for scaffolding (`yo`), building (`grunt`) and package management (`bower`). I use PassportJS for Security layer, and logging using Google, Facebook and Twitter will be implemented  

#### Getting Started ####

1. Set up DAAS by refering the [wiki](https://github.com/bbytes/DAAS/wiki/Getting-started). 
2. Install NodeJS
3. Install Yeoman - `npm install -g yo` 
4. On the root project directory run `grunt server`





