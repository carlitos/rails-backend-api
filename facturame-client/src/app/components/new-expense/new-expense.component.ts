import { Component, OnInit } from '@angular/core';

import { FacturameService } from '../../services/facturame.service';


import { ExpenseModel } from '../../models/expense.model';

import { Router } from '@angular/router';

import { FormBuilder, FormArray, FormGroup, FormControl, NgForm, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: [ ]
})
export class NewExpenseComponent implements OnInit {


  expenseForm = new FormGroup({
    issuer_name: new FormControl(),
    date_issued: new FormControl(),
    issuer_rfc: new FormControl(),
    cfdi_xml: new FormControl(),
    total_amount: new FormControl(),
    user_id: new FormControl(),
  }); 


  constructor( private _facturame_websservice: FacturameService, private router: Router,
               private _fb: FormBuilder ) { }

  ngOnInit(): void {
  }


  send( ) {

 
     this._facturame_websservice.addNew( this.expenseForm.value ).subscribe( expense => console.log(expense) );
     this.expenseForm.reset();
    //  this.router.navigateByUrl('/');

  }



}
