import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class GalleryComponent { }
