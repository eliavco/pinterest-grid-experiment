import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @ViewChild('mimg') image; 

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getRandPhoto().subscribe(data => {
      this.setPhoto(data);
    }, data => {
    })
  }

  setPhoto(photo) {
    let imageUrl = URL.createObjectURL(photo);
    this.image.nativeElement.src = imageUrl;
  }

}