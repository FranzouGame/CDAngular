import { Component, OnInit } from '@angular/core';
import { CdsService } from '../services/cds.service';
import {CD} from '../models/cd.models';

@Component({
  selector: 'app-list-cd',
  standalone: false,
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss'
})
export class ListCDComponent implements OnInit {
  listcd!: CD[];

  constructor(private myCDsService: CdsService) { }

  ngOnInit() : void{
    this.listcd = this.myCDsService.getCDs();
  }
}
