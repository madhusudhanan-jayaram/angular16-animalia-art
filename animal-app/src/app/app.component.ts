import { Component } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [AppRoutingModule],
})
export class AppComponent {
  title = 'animal-app';
}
