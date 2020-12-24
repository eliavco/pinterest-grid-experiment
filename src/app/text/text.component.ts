import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  data = ''

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getRandText().subscribe(data => {
      this.data = data;
    }, data => {
      this.data = data.error.text;
    });
  }

}