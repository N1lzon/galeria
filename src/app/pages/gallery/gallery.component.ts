import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ImageService } from '../../services/image.service';
import { tap } from 'rxjs';

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
  providers:[ImageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class GalleryComponent { 
  
  images: any[] = [];
  constructor(private imageService: ImageService){}

  ngOnInit(): void{
    this.imageService.getImages().pipe(
      tap((data) => {
        this.images = data;
      },
      (error)=> {
        console.log('Error fetching images', error);
      })
    ).subscribe();
  }
}
