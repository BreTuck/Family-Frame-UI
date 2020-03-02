import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ImageResult, ImageData } from '../../../models/APIResults';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
private mainURL: string = 'http://67.176.4.127/image/';
private routeObj: any = {
  'get': '/',
  'getAll': 'all',
  'update': 'update/',
  'delete': 'delete/'
};
private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': ''
  }),
  params: new HttpParams({})
};
  constructor(private httpClient: HttpClient) { }

  public setAuthToken(updatedToken: string): void {
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', updatedToken);
  } 

  public setParams(imageID: number): void {
    this.httpOptions.params = this.httpOptions.params.set("ID", imageID.toString());
  }

  public getUserImages(): Promise<ImageResult> {
    return this.httpClient.get<ImageResult>(`${this.mainURL}${this.routeObj.getAll}`, this.httpOptions).toPromise();
  }

  public getUserImage(imageID: number): Promise<ImageResult> {
    return this.httpClient.get<ImageResult>(`${this.mainURL}${this.routeObj.get}${imageID.toString()}`, this.httpOptions).toPromise();
  }

  public updateImage(updatedImgData: any): Promise<ImageResult> {
    return this.httpClient.put<ImageResult>(`${this.mainURL}${this.routeObj.update}`, updatedImgData, this.httpOptions).toPromise();
  }

  public deleteImage(): Promise<ImageResult> {
   return this.httpClient.delete<ImageResult>(`${this.mainURL}${this.routeObj.delete}`, this.httpOptions).toPromise(); 
  }
}
