import { Component, OnInit,ElementRef } from '@angular/core';
import { ROUTES } from '../component/sidebar/sidebar.component';
import {Event} from '../model/event';
import{Router} from '@angular/router';
import {EventService} from '../share-service/event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private listTitles: any[];
 
  private toggleButton: any;
  private sidebarVisible: boolean;
  private show:String;
//   event
  private event:Event[];
  limit: number;
  numberOfBooks: number;
  page: number = 1;
  filter: Event = new Event()
  constructor( private eventservice:EventService,private element: ElementRef) {
        this.sidebarVisible = false;
  }

  ngOnInit(){
    this.show="Hiển Thị Tất Cả";
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    this.init();
  }
// getdata
    init(){
    this.eventservice.getEvent().subscribe((event)=>{
      console.log(event)
     this.event=event;
     this.numberOfBooks = this.event.length;
      this.limit = 3;
    },(error)=>{
      console.log(error);
    })
  }
//   getlimit
    getlimit(){
        if(this.limit<=3){
            this.limit=this.event.length;
            this.show="Hiển thị ít lại"
        }else{
            this.limit=3;
            this.show="Hiển thị tất cả"
        }
    
    }
  sidebarOpen() {
      const toggleButton = this.toggleButton;
      const body = document.getElementsByTagName('body')[0];
      setTimeout(function(){
          toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');

      this.sidebarVisible = true;
  };
  sidebarClose() {
      const body = document.getElementsByTagName('body')[0];
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
  };
  sidebarToggle() {
      // const toggleButton = this.toggleButton;
      // const body = document.getElementsByTagName('body')[0];
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
  };

 

}
