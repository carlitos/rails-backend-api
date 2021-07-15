export class ExpenseModel {
      constructor(
             public issuer_name: string,
             public date_issued: string,
             public issuer_rfc: string,
             public cfdi_xml: string,
             public total_amount: string,
             public user_id: string
      ) {}
}
