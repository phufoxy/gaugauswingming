import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Tổng Quan',  icon:'content_paste', class: '' },
    { path: 'user-profile', title: 'Thông Tin',  icon:'person', class: '' },
    { path: 'table-list', title: 'Danh Sách Giáo Viên',  icon:'class', class: '' },
    { path: 'table-class', title: 'Danh Sách Lớp',  icon:'class', class: '' },
    { path: 'table-student', title: 'Danh Sách Sinh Viên',  icon:'class', class: '' },
    { path: 'form', title: 'Biểu Mẫu',  icon:'account_circle', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
