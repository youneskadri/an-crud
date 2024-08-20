import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../shared/services/userService/user.service";
import {User} from "../../../shared/models/User";
import {Foyer} from "../../../shared/models/foyer";
import {Roles} from "../../../shared/enums/role";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  users: User[] = [];
  listFoyer: Foyer[]=[];
  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe((res) =>{
      this.users = res.filter((user) => user.role != Roles.admin);
    })
  }



}
