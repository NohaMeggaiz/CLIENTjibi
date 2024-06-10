import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { PayementService } from '../Serving/payement.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  client: any;
  compteSolde!: number;
  id!: number; // Declare id here to access it across the class

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private clientService: PayementService // Fix service injection
  ) { }

  ngOnInit(): void {
    this.id = this.loginService.getCurrentClientId(); // Assign the current client ID
    this.loadClientDetails();
    this.loadCompteSolde();
  }
  loadClientDetails(): void {
    this.clientService.getClientById(this.id)
      .subscribe(data => {
        this.client = data;
      });
  }

  loadCompteSolde(): void {
    this.clientService.getCompteSolde(this.id)
      .subscribe(data => {
        this.compteSolde = data;
      });
  }
}
