import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primera aplicación angular';

  curso: String = "Mi primer aplicación angular";
  profesor: String = "Daniel Sustait";
  alumno: String = "Estrella";
}
