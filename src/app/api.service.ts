import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  getRandText() {
    let ps = this.getRandomInt(1, 10);
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://loripsum.net/api/${ps}/short/headers`, {responseType: 'text'});
  }

  getRandPhoto() {
    let width = this.getRandomInt(100, 500);
    let height = this.getRandomInt(100, 500);
    return this.http.get(`https://picsum.photos/${width}/${height}`, {responseType: 'blob'});
  }

}