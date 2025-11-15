import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// interface Servicio {
//   id: number;
//   nombre: string;
//   descripcion: string;
//   categoria: string;
//   tipo: 'producto' | 'servicio';
//   precio: number;
//   imagen: string;
// }
interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  tipo: 'producto' | 'servicio';
  precio: number;
  imagen: string;
  galeria?: string[]; // <--- agregado
  nota?: string; // <--- opcional por si usas nota
  disponible?: boolean; // <--- opcional por si usas disponible
}

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.scss',
})
export class DetalleProductoComponent {
  //   servicio!: Servicio | undefined;

  //   galeria: [
  //   'https://picsum.photos/200?text=Foto+1',
  //   'https://picsum.photos/200?text=Foto+2',
  //   'https://picsum.photos/200?text=Foto+3'
  // ],

  //   servicios: Servicio[] = [
  //     {
  //       id: 1,
  //       nombre: 'Mariachi Los Soles',
  //       descripcion: 'Ameniza tus eventos con música en vivo',
  //       categoria: 'entretenimiento',
  //       tipo: 'servicio',
  //       precio: 2500,
  //       imagen: 'https://picsum.photos/400/200?text=Mariachi',
  //     },
  //     {
  //       id: 2,
  //       nombre: 'Brincolín Castillo',
  //       descripcion: 'Ideal para fiestas infantiles',
  //       categoria: 'renta',
  //       tipo: 'producto',
  //       precio: 800,
  //       imagen: 'https://picsum.photos/400/200?text=Brincolin',
  //     },
  //     {
  //       id: 3,
  //       nombre: 'Pastel de 3 Leches',
  //       descripcion: 'Pastel decorado para 15 personas',
  //       categoria: 'reposteria',
  //       tipo: 'producto',
  //       precio: 600,
  //       imagen: 'https://picsum.photos/400/200?text=Pastel',
  //     },
  //     {
  //       id: 4,
  //       nombre: 'Globos con helio',
  //       descripcion: 'Decoración personalizada con globos',
  //       categoria: 'decoracion',
  //       tipo: 'producto',
  //       precio: 350,
  //       imagen: 'https://picsum.photos/400/200?text=Globos',
  //     },
  //     {
  //       id: 5,
  //       nombre: 'Fotógrafo profesional',
  //       descripcion: 'Cobertura fotográfica del evento',
  //       categoria: 'otros',
  //       tipo: 'servicio',
  //       precio: 1500,
  //       imagen: 'https://picsum.photos/400/200?text=Fotografo',
  //     },
  //   ];

  //   constructor(private route: ActivatedRoute) {
  //     const id = Number(this.route.snapshot.paramMap.get('id'));
  //     this.servicio = this.servicios.find((s) => s.id === id);
  //   }

  servicio!: Servicio | undefined;

  servicios: Servicio[] = [
    {
      id: 1,
      nombre: 'Mariachi Los Soles',
      descripcion: 'Ameniza tus eventos con música en vivo',
      categoria: 'entretenimiento',
      tipo: 'servicio',
      precio: 2500,
      imagen: 'https://picsum.photos/400/200?text=Mariachi',
      galeria: [
        'https://picsum.photos/200?text=Mariachi+1',
        'https://picsum.photos/200?text=Mariachi+2',
        'https://picsum.photos/200?text=Mariachi+3',
      ],
      nota: 'Este servicio requiere reservar con 48 horas de anticipación.',
      disponible: true,
    },
    // ...resto de servicios
  ];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.servicio = this.servicios.find((s) => s.id === id);
    });
  }
}
