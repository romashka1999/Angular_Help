import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
})
export class OneComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  onClick() {
    const rand = Math.floor(Math.random() * 10);
    this.mainService.pushData(rand);
    // this.mainService.pushedData.emit('pushed data')
    this.mainService.pushedData.next('pushed data')
  }

}
