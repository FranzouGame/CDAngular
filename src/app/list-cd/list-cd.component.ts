import { Component, OnInit } from '@angular/core';
import { CdsService } from '../services/cds.service';
import { CD } from '../models/cd.models';
import { CommonModule } from '@angular/common';
import { CDComponent } from '../cd/cd.component';

@Component({
  selector: 'app-list-cd',
  standalone: true,
  imports: [CommonModule, CDComponent],
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss'
})
export class ListCDComponent implements OnInit {
  listcd!: CD[];

  constructor(private myCDsService: CdsService) { }

  ngOnInit() : void{
    this.myCDsService.getAllCD().subscribe((cds) => {this.listcd = cds;});
  }
}
