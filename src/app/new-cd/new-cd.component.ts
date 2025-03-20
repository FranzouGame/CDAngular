import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CD } from '../models/cd.models';
import { CdsService } from '../services/cds.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-cd',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent {

  formulaire!: FormGroup;
  currentCD!: CD;
  thumbRegex!: RegExp;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private cdsService: CdsService, private router: Router) { }


  ngOnInit(): void {
    this.thumbRegex = new RegExp('^(http(s?):\/\/).+(\.jpg|\.jpeg|\.png)$');
    this.formulaire = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(6)]],
      author : [null, [Validators.required, Validators.minLength(6)]],
      thumbnail : [null, [Validators.required, Validators.pattern(this.thumbRegex)]],
      dateDeSortie : [null , [Validators.required, Validators.min(0)]],
      quantite : [null , [Validators.required, Validators.min(0)]],
      price : [null , [Validators.required, Validators.min(0)]],
    },
    {
      updateOn: 'blur'
    }
  );

   
    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentCD = {
        id: 0,
        title: formValue.title,
        author: formValue.author,
        price: formValue.price,
        thumbnail: formValue.thumbnail,
        dateDeSortie: formValue.dateDeSortie,
        quantite: formValue.quantite,
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;
  
    let newCD: CD = {
      id: 0, // Id fictif
      title: this.formulaire.get('title')?.value,
      author: this.formulaire.get('author')?.value,
      price: this.formulaire.get('price')?.value,
      thumbnail: this.formulaire.get('thumbnail')?.value,
      dateDeSortie: this.formulaire.get('dateDeSortie')?.value,
      quantite: this.formulaire.get('quantite')?.value,
      onSale: false
    };
  
    this.cdsService.addCD(newCD).subscribe({
      next: (cd) => {
        console.log('CD ajouté avec succès :', cd);
        this.router.navigate(['/catalog']);
      },
      error: (err) => {
        console.error('Erreur lors de l’ajout du CD :', err);
      }
    });
  }
}
