import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-dash-box-item',
  templateUrl: './dash-box-item.component.html',
  styleUrls: ['./dash-box-item.component.scss']
})
export class DashBoxItemComponent implements OnInit {
  txtBox:string ='';
  constructor() {}
  display1:Boolean = true;
  display2:Boolean = false;

  ngOnInit(): void {
  }

  toggle(){
    this.display1 = !this.display1;
    this.display2 = !this.display2;
  }
  @Output() onAddEvent = new EventEmitter<string>();
  outputContent(n:string){
    this.toggle();
    if(n=='')
    return null;
    else
    this.onAddEvent.emit(n);

  }

  clearVaulue(){
    this.toggle();
    this.txtBox='';
  }
}
