import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  

  // banners = [
  //   'https://picsum.photos/100/100?text=Negocio1',
  //   'https://picsum.photos/100/100?text=Negocio2',
  //   'https://picsum.photos/100/100?text=Negocio3',
  //   'https://picsum.photos/100/100?text=Negocio4'
  // ];

  // Definimos los banners por grupo
bannerGroup1: string[] = [
  'https://i.ibb.co/1GST9MyK/Gemini-Generated-Image-q5hhzlq5hhzlq5hh.png',
  '/images/publisol.png',
  'https://picsum.photos/800/300?text=Negocio3'
];

bannerGroup2: string[] = [
  'https://picsum.photos/400/200?text=Negocio4',
  'https://picsum.photos/400/200?text=Negocio5',
  'https://picsum.photos/400/200?text=Negocio6'
];

bannerGroup3: string[] = [
  'https://picsum.photos/400/200?text=Negocio7',
  'https://picsum.photos/400/200?text=Negocio8',
  'https://picsum.photos/400/200?text=Negocio9'
];
groupedBanners: string[][] = [['B1','B2','B3'],
['B4','B5','B6'],
['B7']];
banners = ['B1','B2','B3','B4','B5','B6','B7'];
// this.groupedBanners = [
//   ['B1','B2','B3'],
//   ['B4','B5','B6'],
//   ['B7']
// ];



  // constructor(private authService: AuthService) {}

  loginWithGoogle() {
    // this.authService.loginWithGoogle();
  }
  // Suponiendo que tienes un array banners = [url1, url2, ...]
  

  ngOnInit() {
    this.groupedBanners = [];
    const groupSize = 3; // 3 banners por slider secundario
  
    // Recorremos el array original de banners de 3 en 3
    for (let i = 0; i < this.banners.length; i += groupSize) {
      // Tomamos un "slice" de 3 banners y lo añadimos a groupedBanners
      this.groupedBanners.push(this.banners.slice(i, i + groupSize));
    }
  }
  

}
