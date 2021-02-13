import { Restaurant } from './../model/restaurant';
import { RestoService } from './../service/resto.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-resto-add',
  templateUrl: './resto-add.component.html',
  styleUrls: ['./resto-add.component.scss']
})
export class RestoAddComponent implements OnInit {
  alert : boolean = false;

  restoForm = new FormGroup({
    name: new FormControl(''),
    personelCount: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private service : RestoService) { }

  ngOnInit() : void {
  }

  saveRestaurant() {
    this.service.saveRestaurant(this.restoForm.value);
    this.alert = true;
    this.restoForm.reset({});
  }

  closeAlert(){
    this.alert = false;
  }
}
