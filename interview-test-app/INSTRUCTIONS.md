## INSTRUCTIONS

to run this application locally you first need to have installed npm (which comes from Node) in your system
,in a command prompt or terminal try:
```
npm --version
```
to check your current version. I used npm version 6.14.13.

in the command prompt, go to the project folder location and inside interview-test-app folder run
```
npx serve -s build
```
or if you want a setted port use
```
npx serve -s build -p PORT
```
after a couple seconds, we will have deployed locally the application in a route like the following:

![Local route](print-launches-2.png "Local route")

if for some reason you want to run in without using the build folder you can open a command prompt 
inside interview-test-app folder and run
```
npm i
```
this will install all the required node_modules used in this application.
after it finished run:
```
npm start
```
and it will open a navigation tab automatically

## RUN TESTS

open a command prompt inside interview-test-app folder and run:
```
npm test
```