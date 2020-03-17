import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
})
export class PipesComponent implements OnInit {
  carColor = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('red');
    }, 2000);
  })
  cars: any[] = [
    {
      name: 'mercedes benz',
      model: 'e350',
      store: 0,
      color: 'black',
      released: new Date(15, 2, 2019)
    },
    {
      name: 'toyota',
      model: 'prius',
      store: 12,
      color: 'red',
      released: new Date(12, 2, 2079)
    },
    {
      name: 'mercedes benz',
      model: 's300',
      store: 32,
      color: 'green',
      released: new Date(11, 7, 2019)
    },
    {
      name: 'toyota',
      model: 'camry',
      store: 7,
      color: 'green',
      released: new Date(9, 4, 2016)
    }
  ];

  filteredColor: string ='';

  constructor() { }

  ngOnInit(): void {
  }

  getStoreClasses(car: any) {
    return {
      'list-group-item-danger': car.store === 0,
      'list-group-item-warning': car.store > 0 && car.store < 10,
      'list-group-item-success': car.store > 10,
    }
  }

  onAddCar() {
    this.cars.push({
        name: 'dumy',
        model: 'dymy',
        store: 100,
        color: 'black',
        released: new Date(9, 4, 2019)
    });
  }

}
