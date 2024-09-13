import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { ImageService } from './services/image.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    
  ],
  providers:[
    provideClientHydration(),
    ImageService
  ]
})



export class AppModule { }
