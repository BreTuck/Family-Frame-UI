import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResult } from '../../models/APIResults';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mainURL: String = 'http://67.176.4.127/user/';
  private routeObj: any = {
    signup: 'signup',
    signin: 'signin',
    signout: 'signout',
    get: 'get',
    update: 'update',
    change: 'change'
  };
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': ''
    })
  };
  private isAuthed = false;

  constructor(private httpClient: HttpClient) { }

  // Helper Functions
  public isUserAuthed(): Boolean {
    return this.isAuthed;
  }

  public setAuthToken(updatedToken: string): void {
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', updatedToken);
  } 

  // Main Auth Methods
  public authenticate(potentialEmail: string, potentialPassword: string): Promise<AuthResult> {
    return this.httpClient.post<AuthResult>(`${this.mainURL}${this.routeObj.signin}`, { email: potentialEmail, password: potentialPassword }).toPromise();
  }
  
  public createUser(name: string, email: string, password: string): Promise<AuthResult> {
    return this.httpClient.post<AuthResult>(`${this.mainURL}${this.routeObj.signup}`, { name: name, email: email, password: password }).toPromise();
  }

  public deauthenticate(): Promise<boolean> {
    return this.httpClient.get<boolean>(`${this.mainURL}${this.routeObj.signout}`, this.httpOptions).toPromise();
  }
}
