import { Injectable } from '@angular/core';
import { CD } from '../models/cd.models';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  getCDs(): CD[] {
     return [
        {
        id : 1,
        title : "The Dark Side of the Moon",
        author : "Pink Floyd",
        price : 10,
        thumbnail : "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        dateDeSortie : new Date(1973, 2, 1),
        quantite : 1,
      },
      {
        id : 2,
        title: 'Pulse',
        author : 'Pink Floyd',
        price : 10,
        thumbnail : 'https://static.common-ground.io/common/releases/4175846/img-d-ZHeB1bMjI.jpeg',
        dateDeSortie : new Date(1995, 4, 29),
        quantite : 2,
        onSale : true
      },
      {
        id : 3,
        title: 'Pulse1',
        author : 'Pink Floyd',
        price : 100,
        thumbnail : 'https://upload.wikimedia.org/wikipedia/en/6/6c/Pulse_cover.jpg',
        dateDeSortie : new Date(1995, 4, 29),
        quantite : 0,
      }
    ];
  }

  getCdById(id: number): CD {
    const cd = this.getCDs().find(cd => cd.id === id);
    if (cd) {
      return cd;
    }
    else {
      throw new Error('CD not found');
    }
  }
}
