import { Component, Input } from '@angular/core';

import { SalesTaxService } from './sales-tax.service';
import { TaxRateService } from './tax-rate.service';

@Component({
  selector: 'app-sales-tax',
  templateUrl: './sales-tax.component.html',

  /*
  template: `
    <h2>Sales Tax Calculator</h2>
    <label>Amount: <input #amountBox (change)="0"></label>
    <div *ngIf="amountBox.value">
    The sales tax is
     {{ getTax(amountBox.value) | currency:'Q. ':true:'1.2-2' }}
    </div>
  `,
  */
  providers: [SalesTaxService, TaxRateService],
})
export class SalesTaxComponent {
  amountBox: number;

  constructor(private salesTaxService: SalesTaxService) {}

  getTax(value: string | number) {
    return this.salesTaxService.getVAT(value);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
