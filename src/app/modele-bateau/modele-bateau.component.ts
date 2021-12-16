import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modele-bateau',
  templateUrl: './modele-bateau.component.html',
  styleUrls: ['./modele-bateau.component.scss']
})
export class ModeleBateauComponent implements OnInit {
  constructor(private http: HttpClient) {}


  minString = 3;
  maxString = 40;

  listeBateau = new Array;
  listeMesures = new Array;

//liens des API

  bateau = "";

  api = "https://iwa2021.edriki.com/api/Boat/Search/";

  rechercheDeBateau = "";

  apiRef = "https://iwa2021.edriki.com/api/Boat/ByRef/";

  ref  = "";

  rechercheAvanceBateau = this.apiRef + this.ref;

  apiPrix = "https://iwa2021.edriki.com/api/Item/Items";

  rechercheAvancePrix = this.apiPrix;


  lengthm = "";
  gvsl = "";
  gvl = "";
  gve = "";
  gm = "";
  ge = "";
  ss = "";
  sa = "";
  gs = "";

//pour trouver un bateau

  changeMonBateau($event:any)
  {
    this.bateau = $event.target.value;
    console.log($event.target.value);
    this.rechercheDeBateau = this.api + this.bateau;

    this.rechercheBateau($event);
  }

  rechercheBateau($event:any)
  {
      var term = $event.target.value;
      if(term.length >= this.minString && term.length < this.maxString)
      {
        this.http.get<any>(this.rechercheDeBateau).subscribe(respond => {
          this.listeBateau = respond.response.datas;
          console.log(this.listeBateau);
        });
      }


  };

  choixBateau()
  {
    this.rechercheAvanceBateau = this.apiRef + this.bateau;

    this.rechercheMesure(this.bateau);
  };

//pour recuperer les mesures du bateau selectionner

  rechercheMesure($event:any)
  {
      var element = <HTMLInputElement> document.getElementById("boutonLongueur");
      element.disabled = false;

      this.http.get<any>(this.rechercheAvanceBateau).subscribe(respond => {
        console.log(respond.response.datas);
        this.lengthm = respond.response.datas.lengthm;
        this.gvsl = respond.response.datas.sails.gvsl;
        this.gvl = respond.response.datas.sails.gvl
        this.gve = respond.response.datas.sails.gve;
        this.gm = respond.response.datas.sails.gm;
        this.ge = respond.response.datas.sails.ge;
        this.ss = respond.response.datas.sails.ss;
        this.sa = respond.response.datas.sails.sa;
        this.gs = respond.response.datas.sails.gs;
      });
  };

//pour recuperer les description et les prix par item du bateau selectionner
  prixVoiles()
  {
    this.rechercheAvancePrix = this.apiPrix;

    this.recherchePrixVoiles(this.apiPrix);
  };

  recherchePrixVoiles($event:any)
  {
    this.http.get<any>(this.rechercheAvancePrix).subscribe(respond => {
      console.log(respond.response.datas);
    });
  };


  ngOnInit(): void {}
}