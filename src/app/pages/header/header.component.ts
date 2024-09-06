import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public titleService: Title) {}

  // Método para cambiar el título
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle('Galería');
  }
  
}
