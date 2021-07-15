import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ExpenseModel } from '../models/expense.model';

@Injectable({
  providedIn: 'root'  
})
export class FacturameService {

  constructor( private http: HttpClient ) { }

  getExpenses() {
    return this.http.get<ExpenseModel>( environment.backend + 'expenses.json')
    .pipe(
      retry(1)
    )
  }

  addNew( expense: any ):Observable<ExpenseModel> {
    return this.http.post<ExpenseModel>( environment.backend + 'expenses.json', expense )
  }


}


