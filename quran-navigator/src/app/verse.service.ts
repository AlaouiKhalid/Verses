import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs' 

import { Configuration } from './configuration';

import { Verse } from './verse';

@Injectable()
export class VerseService {

    //Notifications
    from = 'top';
    align = 'right';
    successMessage = 'Check Transaction Successful... ';
    failMessage = 'Sorry, you are authorized to perform the current transaction - please check with the app admin';


    private resolveSuffix = '?resolve=true';

    private ServerSourat: string;
    private ServerVerse: string;
    private ServerWord: string;    
    private ServerWordInSourat: string;


    private headers: Headers;

    constructor(private HttpClient: HttpClient, private _configuration: Configuration) {
        this.ServerSourat = _configuration.ServerSourat;
        this.ServerVerse = _configuration.ServerVerse;
        this.ServerWord = _configuration.ServerWord;
        this.ServerWordInSourat = _configuration.ServerWordInSourat;

    }

    public getSourat(id: string): Observable<Verse[]> {

        return this.HttpClient.get<Verse[]>(this.ServerSourat + '/' + id, { withCredentials: false });
    }
    public getVerse(id: string): Observable<Verse> {

        return this.HttpClient.get<Verse>(this.ServerVerse + '/' + id, { withCredentials: false });
    }

    public searchWord(id: string): Observable<Verse[]> {

        return this.HttpClient.get<Verse[]>(this.ServerWord + '/' + id, { withCredentials: false });

    }
    
    public searchWordInSourat(id: string): Observable<Verse[]> {

        return this.HttpClient.get<Verse[]>(this.ServerWordInSourat + '/' + id, { withCredentials: false });

    }


   /*  private handleError(error: any): Observable<string> {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

    private extractJsonData(res: Response): any {
        
        
        return res;
    }
     public getProducts(): Observable<Verse[]> {
        return this.HttpClient.get<Verse[]>(`api/products/v1/`);
    }  */
    
}
