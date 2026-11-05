import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent {

  newProduit = new Produit();

  message! : string;

  constructor(private produitService: ProduitService,
              private router: Router ) {}

  addProduit(){
   // console.log(this.newProduit);
   this.produitService.ajouterProduit(this.newProduit)
        .subscribe(prod => {
            console.log(prod);
            this.router.navigate(['produits']);
            });
   this.message = "Produit "+this.newProduit.nomProduit +" ajouté avec succès !"
  }


}
