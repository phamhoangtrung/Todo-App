import { Component, OnInit, ViewChild } from '@angular/core';
import { DashBoardServicesService } from 'src/app/services/dash-board-services.service';
import { DashBox} from '../../models/dash-item.model'
@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.scss']
})
export class DashPageComponent implements OnInit {
  dboxName = '';
  toggleIpt = true;
  public dashDB :Array<DashBox> =[]
  constructor(public dboardService : DashBoardServicesService) { 
    this.dashDB = this.dboardService.db;
  }
  ngOnInit(): void {
  }
  newBox(){
    if (this.dboxName.trim()=='')
      alert("Please enter your task name.")
    else{  
      this.toggle();
      this.dboardService.db.push({
      boxName:this.dboxName,
      content:[],
    });
  }
    this.dboxName='';
  }

  toggle(){
    this.toggleIpt= !this.toggleIpt
  }
}
