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

    // console.log( this.expenseForm.value );


    // console.log( 'Forma: ', form.value );

    // if ( form.invalid) {
    //   console.log('Formulario no valido');
    // }

    //  let peticion: Promise<any>;

     this._facturame_websservice.addNew( this.expenseForm.value ).subscribe( expense => console.log(expense) );

    //  peticion.then( response => {
    //    console.log( 'promise', response );
    //  });

    //  this._facturame_websservice
    //   .createExpense( this.expenseForm.value)
    //   .subscribe(hero => this.heroes.push(hero));
    this.expenseForm.reset();

    //  this.router.navigateByUrl('/');

  }



}
