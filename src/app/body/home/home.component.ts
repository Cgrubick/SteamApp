import { Component, OnInit } from '@angular/core';

import { mock_stream } from 'src/app/stream-cards/mock-stream';
import { Stream } from 'src/app/stream-cards/stream.model';


@Component({
  selector: 'Steam-Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  streams: Stream[]= [];

  constructor() {
   
    for (var stream of mock_stream) {
      this.streams.push(new Stream(stream));
    }
  }


 

  ngOnInit(): void {
  }

}
