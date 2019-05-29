import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { Cep } from '../cep'; 

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep = new Cep();
  constructor(private CepService:CepService) { }

  ngOnInit() {
  }

}
