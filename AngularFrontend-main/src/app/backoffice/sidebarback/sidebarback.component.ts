import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebarback',
  templateUrl: './sidebarback.component.html',
  styleUrls: ['./sidebarback.component.scss']
})
export class SidebarbackComponent implements OnInit{
  AdminName:string = '';

  ngOnInit(): void {
    const localStorageValue = localStorage.getItem('firstname');
    this.AdminName = localStorageValue !== null ? localStorageValue : 'defaultName';
  }


}
