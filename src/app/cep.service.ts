import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { Cep } from './cep'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class CepService {

  constructor(private http: Http) {  }

  buscar(cep: string): Observable<Cep> {
     return this.http.get('https://viacep.com.br/ws/'+cep+'/json/')
        .map((response: Response) => <Cep>response.json())
        .do(data => console.log('All: ' + JSON.stringigy(data)))
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
