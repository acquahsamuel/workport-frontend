import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateJobService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(``)
  }

  find(itemId: any) {
    console.log(itemId);
  }

  create(itemPayload: any) {
    console.log(itemPayload);
  }

  update(itemId: any, itemPayload: any) {
    console.log(itemId, itemPayload)
  }

  // delete() { }
}
