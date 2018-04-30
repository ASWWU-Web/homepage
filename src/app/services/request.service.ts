// originally coppied from pages

//This is here just for testing. It should eventually be put in a separate git repo
//or be bundled with a base ASWWU project.
import { NgModule, Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

// import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { User } from '../models/models';
import { Subscription } from 'rxjs/Subscription';

// for getObservable
import {of} from 'rxjs/observable/of';

@Injectable()
export class RequestService {
  authUser: User;
  private isLoggedIn: boolean = false;


  constructor(private http: HttpClient) {}

  private setCurrentUser(user: any): void {
    if (user.hasOwnProperty('wwuid') && user.wwuid) {
      this.authUser = new User(user);
      this.isLoggedIn = true;
    } else {
      this.authUser = undefined;
      this.isLoggedIn = false;
    }
  }

  /*
  * Verifies the login status of the current user.
  * Gets current user and sets it to authUser
  * Also returns the user object to the callback function.
  */
  verify(cb?: any): void {
    //TODO: Determine if the token really should be updated. (ie. Only if the
    // token is older than 1 hour should a new one be generated.)
    if (document.cookie.search("token=") !== -1) {
      this.verifyGet("verify", data => {
        //Log in the user
        let user = data.user || null;
        this.setCurrentUser(user);
        if (typeof cb == "function") cb(user);
      }, err => {
        //user in not logged in remove authUser.
        this.setCurrentUser({});
        if (typeof cb == "function") cb(null);
      });
    } else {
      this.authUser = undefined;
      this.isLoggedIn = false;
    }
  }


  private createRequest(uri: string, contentType: string = "application/json"): any {
    let url = uri;
    if (!url.startsWith("http")) {
      url = environment.SERVER_URL;
      if (url.split('').pop() != '/' && uri[0] != '/') url += '/';
      url += uri;
    }

    let options = {
      headers: new HttpHeaders().set('Content-Type', contentType),
    };

    return { url: url, options: options };
  }

  /*
  * Seperate function to make get requests in the Verify function.
  * Use of the normal get function would cause an infinite loop.
  * */
  private verifyGet(uri: string, afterRequest, catchError): void {
    let req = this.createRequest(uri);
    this.http.get(req.url, req.options)
      .subscribe(
        data => afterRequest(data),
        err => (catchError ? catchError(err) : console.error(err))
      );
  }

  /*
  * Functions to make get and post requests
  * If a full url isn't specified, the default is aswwu.com/ and then the path given
  * */
  get(uri: string, afterRequest, catchError): void {
    let req = this.createRequest(uri);
    this.verify();
    this.http.get(req.url, req.options)
      // .map(res => res.json())
      .subscribe(
      data => afterRequest(data),
      err => (catchError ? catchError(err) : console.error(err))
      );
  }

  // for use with typeaheads
  getObservable(uri: string): Observable<any> {
    const req = this.createRequest(uri);
    this.verify();
    return this.http.get(req.url, req.options);
  }


  post(uri: string, data: any, afterRequest, catchError): void {
    let body = JSON.stringify(data);
    this.verify();
    let req = this.createRequest(uri);
    this.http.post(req.url, body, req.options)
      .subscribe(
        data => afterRequest(data),
        err => (catchError ? catchError(err) : console.error(err))
      );
  }

  private objToHttpParams(obj): HttpParams {
    let params: HttpParams = new HttpParams();
    for (var key of Object.keys(obj)) {
      if (typeof obj[key] == "string") {
        params = params.append(key, obj[key].replace(/\;/g, ","));
      } else {
        params = params.append(key, JSON.stringify(obj[key]));
      }
    }
    return params;
  }

  postxwww(uri: string, data: any, afterRequest, catchError): void {
    let body = this.objToHttpParams(data);
    this.verify();
    let req = this.createRequest(uri, "application/x-www-form-urlencoded; charset=UTF-8");
    this.http.post(req.url, body.toString(), req.options).subscribe(
        data => afterRequest(data),
        err => (catchError ? catchError(err) : console.error(err))
      );
  }

  uploadImage(file:File, callback:Function, catchError:Function) {
    let data = new FormData;
    data.append('file', file, file.name);
    let request = this.createRequest("/pages/media/upload_image");
    this.http.post(request.url, data).subscribe(
      data => callback(data),
      err => (catchError ? catchError(err) : console.log(err))
    );
  }

  isLoggedOn(): boolean {
    //Returns true if authUser is defined, false otherwise.
    return this.isLoggedIn;
  }

}
