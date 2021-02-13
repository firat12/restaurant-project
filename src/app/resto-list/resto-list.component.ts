import { RestoService } from './../service/resto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resto-list',
  templateUrl: './resto-list.component.html',
  styleUrls: ['./resto-list.component.scss']
})
export class RestoListComponent implements OnInit {


  constructor(private service : RestoService) { }

  collection : any = {};

  ngOnInit() : void {
    this.service.getList().subscribe((result)=>{
       console.warn(result);
       this.collection = result;
    })
  }

  deleteResto(id : any){
    debugger;
    this.service.removeRestaurant(id);
  }

}
