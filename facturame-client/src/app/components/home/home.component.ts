import { Component, OnInit } from '@angular/core';
import { FacturameService } from '../../services/facturame.service';
import { ExpenseModel } from '../../models/expense.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ ],
  providers: [ FacturameService ]
})

export class HomeComponent implements OnInit {
  
  expense: ExpenseModel | undefined;

  data: any = [];

  constructor( private _factura_ws: FacturameService ) {
    this._factura_ws = _factura_ws;
  }

  ngOnInit(): void {   
    this.listExpenses();
  }

  listExpenses() {
    this._factura_ws.getExpenses()
    .subscribe(( data: ExpenseModel ) => {
      
      this.data = data;
      // console.log('data: ', this.data );
          
    });
  }

  

}
