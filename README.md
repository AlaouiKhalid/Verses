# Quran Navigator
this app helps youu to get every verse that you want on multiple languages (21 languages)
-Original_Arabic
-Chinese
-French
-engyusufali
-Persian
-Japanese
-Norwegian
-Bangla
-Malayalam
-Dutch
-Urdu
-Turkish
-Italian-Piccardo
-Russian
-Portuguese
-Swedish
-German
-Tamil
-Uzbek
-Indonesian
-Korean
  
and you can search by word on specifiying the languages

Make sure that you have these requirement installed:
-MongoDB
-NodeJs
-Angular


1)first you have to create  on your Mongodb server a new database as follow:
    the database name:qd
    the collection name :verses
then import the data on the json file below with this command:
mongoimport --db=qd --collection=verses --file=verses.json 


2)on the VersesApiBackend folder  enter:npm install
then run the API with:node app
3)on the quran-navigator folder  enter:npm install
then run the app with :ng serve