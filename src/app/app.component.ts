import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persona: Object = {
    nombre: 'Jaime',
    photoURL: 'https://avatars1.githubusercontent.com/u/4156183'
  };
  
  isDisabled: boolean = true;
  
  clases: Object = {
    deshabilitado: this.isDisabled,
    resaltado: true,
    habilitado: !this.isDisabled
  };
  
  cuidado: string = `<script>alert('Este código es peligroso')</script>`;
}
