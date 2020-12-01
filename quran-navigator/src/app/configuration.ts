import { Injectable } from '@angular/core';

@Injectable()

//provides configurate to composer rest Server
export class Configuration {

    //localhost you have just to change to ip address
    public ApiIP: string = "http://localhost";    //localhost
    //port for the  Api
    public ApiPort: string = "3005";

    //getting a sourat /lang
    public ServerSourat: string = this.ApiIP + ":" + this.ApiPort + "/sourat";


    //getting a verse in a sourat /lang
    public ServerVerse: string = this.ApiIP + ":" + this.ApiPort + "/verse";


    // a word(lang)
    public ServerWord: string = this.ApiIP + ":" + this.ApiPort + "/searchword";

    // a word(lang) in sourat
    public ServerWordInSourat: string = this.ApiIP + ":" + this.ApiPort + "/searchwordinsourat";

}
