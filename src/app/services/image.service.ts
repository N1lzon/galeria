import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiURL = 'https://api.unsplash.com/photos';
  private accesKey = 'b15ijGfkVdYBLq2pWN5pnFLS-ZQTV7keywl1U7t8mUU';

  constructor(private http: HttpClient){}

  getImages():Observable<any> {
    return this.http.get<any>(`${this.apiURL}?client_id=${this.accesKey}`);
  }

}
