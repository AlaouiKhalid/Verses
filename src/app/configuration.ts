import { Injectable } from '@angular/core';

@Injectable()

//provides configurate to composer rest Server
export class Configuration {

    //localhost you have just to change to ip address
    public ApiIP: string = "http://localhost";    //localhost
    //port for the  Api
    public ApiPort: string = "3005";
    //this.ApiIP + ":" + this.ApiPort +link

    //getting a sourat /lang
    public ServerSourat: string =  "/sourat";


    //getting a verse in a sourat /lang
    public ServerVerse: string =  "/verse";


    // a word(lang)
    public ServerWord: string =  "/searchword";

    // a word(lang) in sourat
    public ServerWordInSourat: string =  "/searchwordinsourat";

}
