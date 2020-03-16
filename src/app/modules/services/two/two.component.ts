import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
})
export class TwoComponent implements OnInit , OnDestroy{

  numDataSub: any;
  numData: number[];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.numData = this.mainService.getData();

    this.numDataSub = this.mainService.pushedData.subscribe( (msg: string) => {
      this.numData = this.mainService.getData();
    })
  }

  ngOnDestroy() {
    this.numDataSub.unsubscribe();
  }


}
