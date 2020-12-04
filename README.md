# Quran Navigator
this app helps you to get every verse in Quran on multiple languages (21 languages)
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
  
and you can search by word on specifying the language



## Installation
Make sure that you have these requirement installed:
    -MongoDB
    -NodeJs
    -Angular

Step 1. you have to import the data on the verses.json file on your Mongodb server with a new database (the database name->qd, the collection name->verses) as follow: 

```
mongoimport --db=qd --collection=verses --file=verses.json 
```


Step 2. Run the API
on the VersesApiBackend folder  enter:
```
npm install
node app
```
Step 3. Run the app
on the quran-navigator folder  enter:
```
npm install
ng serve
```
mongo "mongodb+srv://verses.xqvlj.mongodb.net/qd" --username AlaouiKhalid
mongoimport --uri mongodb+srv://AlaouiKhalid:"Azich&123"@verses.xqvlj.mongodb.net/qd --collection verses --type json --file verses.json


connection string :
mongo "mongodb+srv://verses.xqvlj.mongodb.net/qd" --username AlaouiKhalid

mongoimport --host=verses-shard-00-00.xqvlj.mongodb.net:27017  --username=AlaouiKhalid --collection=verses --db=qd --file=C:\Users\Pc\Desktop\Nouveau dossier\Versesverses.json
mongoimport --uri mongodb+srv://AlaouiKhalid:"Azich&123"@verses.xqvlj.mongodb.net/qd --collection verses --type json --file verses.json