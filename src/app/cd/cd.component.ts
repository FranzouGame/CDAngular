import { Component, Input, OnInit } from '@angular/core';
import { CD } from '../models/cd.models';
import { CdsService } from '../services/cds.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cd',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CDComponent implements OnInit {

  @Input() cd!: CD;
  theCd! : CD;
  idcd!: string;

  constructor(private cdService : CdsService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.idcd = this.route.snapshot.params['id'];
    if (this.idcd !== undefined) {
      this.cdService.getCDById(+this.idcd).subscribe((cd) => {
        this.theCd = cd;
      });
    }
    else {
      this.theCd = this.cd;
    }
  }

  onAddCd(): void{
    this.theCd.quantite++;
  }
}