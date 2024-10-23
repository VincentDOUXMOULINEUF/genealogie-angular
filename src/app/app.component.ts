import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IdentityCardsComponent } from './components/identity-cards/identity-cards.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IdentityCardsComponent,
    NavigationComponent,
    SidebarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'genealogie-angular';
}
