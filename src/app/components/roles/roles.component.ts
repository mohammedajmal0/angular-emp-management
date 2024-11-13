import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName:string="Emp Role"
  selectedOption:string=""

  showHelloAlert(){
    alert("helllllo")
  }

  showMessageAlert(message:string){
    alert(message)
  }
}
