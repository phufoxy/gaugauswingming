import { Component, OnInit,Inject } from '@angular/core';
const Teacher = [
    {id: 1, name:'Nguyễn Văn A',age:21,job:'Giảng Viên',image:'https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg'},
    {id: 2, name:'Nguyễn Văn B',age:21,job:'Giảng Viên',image:'https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg'},
    {id: 3, name:'Nguyễn Văn C',age:21,job:'Giảng Viên',image:'https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg'},
    {id: 4, name:'Nguyễn Văn Nam',age:21,job:'Giảng Viên',image:'https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg'},
    {id: 5, name:'Trần Viết A',age:21,job:'Giảng Viên',image:'https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg'},
    {id: 6, name:'Lê Xung Công',age:21,job:'Giảng Viên',image:'https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg'},
    {id: 7, name:'Trần Ngà',age:21,job:'Giảng Viên',image:'https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg'},
  ];

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
    teacher=Teacher;
  constructor() { }
 
  ngOnInit() {
  }

}
