import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponse, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  firstName:string="Emp Role"
  selectedOption:string=""

  http=inject(HttpClient)
  roleList:IRole[]=[]
  ngOnInit(): void {
    this.getRolesList()
  }

  getRolesList(){
    this.http.get<APIResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:APIResponse)=>{
      this.roleList=res.data
      console.log(res.data)
    })
  }
  showHelloAlert(){
    alert("helllllo")
  }

  showMessageAlert(message:string){
    alert(message)
  }
}
