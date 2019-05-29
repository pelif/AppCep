import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CepService {

  constructor(private http:http) {  }

  buscar(cep:string) {
    this.http.get('https://viacep.com.br/ws/${cep}/json/`)
    .toPromise()
    .then(response => (
      console.log(response)
    ));

  }
}
