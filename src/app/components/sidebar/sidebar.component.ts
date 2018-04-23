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
        { path: 'event', title: 'Sự Kiện',  icon:'event', class: '' },
        { path: 'user-profile', title: 'Biểu Mẫu Thành Viên',  icon:'person', class: '' },
        { path: 'class-profile', title: 'Biểu Mẫu Lớp',  icon:'assignment_ind', class: '' },
        { path: 'table-teacher', title: 'Danh Sách Giáo Viên',  icon:'class', class: '' },
        { path: 'table-student', title: 'Danh Sách Sinh Viên',  icon:'face', class: '' },
        { path: 'table-class', title: 'Danh Sách Lớp',  icon:'format_align_justify', class: '' },
        { path: 'setting', title: 'Cài đặt',  icon:'perm_data_setting', class: '' },
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
