// recapitulatif.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {
  formData: any;
  creancierName: string;
  creancierLogo: string;
  creanceName: string;
  creanceAmount: number;
  transactionType: string;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.formData = navigation?.extras?.state?.['data'] || {};
    this.creancierName = navigation?.extras?.state?.['creancierName'] || '';
    this.creancierLogo = navigation?.extras?.state?.['creancierLogo'] || '';
    this.creanceName = 'Some Creance'; // Adjust as needed
    this.creanceAmount = navigation?.extras?.state?.['creanceAmount'] || 0;
    this.transactionType = navigation?.extras?.state?.['transactionType'] || 'facture';
  }

  ngOnInit(): void {
    console.log(this.formData);
    console.log(this.creancierName);
    console.log(this.creancierLogo);
    console.log(this.creanceName);
    console.log(this.creanceAmount);
    console.log("type of transaction: " + this.transactionType);
  }

  getTransactionDetails(): { label: string, value: any }[] {
    return [
      { label: 'Téléphone du donateur', value: this.formData['Téléphone du donateur'] },
      { label: 'Montant du don', value: this.creanceAmount }
    ];
  }

  calculateTotalAmount(): number {
    return this.creanceAmount;
  }

  confirmTransaction() {
    // Navigate back to the initial interface with a success message
    this.router.navigate(['/initial-interface'], {
      state: { success: true, message: 'Transaction successful!' }
    });
  }
}
