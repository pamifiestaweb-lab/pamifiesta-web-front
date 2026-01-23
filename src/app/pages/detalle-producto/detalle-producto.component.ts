import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare var bootstrap: any;

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
  descripcion_servicio: string;
  categoria: string;
  tipo: 'producto' | 'servicio';
  precio: number;
  imagen: string;
  // galeria?: string[]; // <--- agregado
  galeria: { url: string; descripcion?: string }[];

  nota?: string; // <--- opcional por si usas nota
  disponible?: boolean; // <--- opcional por si usas disponible
  horario?: string;
  redes?: {
    x?: string;
    instagram?: string;
    facebook?: string;
  };
  streaming?: {
    youtube?: string;
    tiktok?: string;
  };
  whatsapp?: string;
  telefono?: string | null;
  email?: string | null;
  videos?: { url: string; titulo?: string }[];

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
  // videoEmbedUrl: string | null = null;
  videoEmbedUrl: SafeResourceUrl | null = null;

videoTitulo: string | null = null;

  servicios: Servicio[] = [
    {
      id: 1,
      nombre: 'Mariachi Los Soles',
      descripcion: 'Ameniza tus eventos con música en vivo',
      descripcion_servicio: 'Mariachi Los Soles es un grupo profesional con años de experiencia llevando alegría, emoción y un ambiente inolvidable a todo tipo de eventos. Su repertorio abarca desde las clásicas rancheras y baladas románticas, hasta temas modernos adaptados al estilo mariachi, ofreciendo siempre un espectáculo de calidad. Ya sea para serenatas, cumpleaños, bodas, aniversarios o eventos empresariales, su presentación destaca por la armonía vocal, el sonido impecable de los instrumentos y la energía que transmiten en cada interpretación. Contratarlos garantiza un momento único y lleno de sentimiento que tus invitados recordarán por siempre.',

      categoria: 'entretenimiento',
      tipo: 'servicio',
      precio: 2500,
      imagen: 'https://picsum.photos/400/200?text=Mariachi',
      
      galeria: [
        // Cuadradas
        { url: 'https://picsum.photos/200/200?text=Mariachi+1', descripcion: 'Presentación en evento privado' },
        { url: 'https://picsum.photos/250/250?text=Mariachi+2', descripcion: 'Actuación especial en evento nocturno' },
        { url: 'https://picsum.photos/300/300?text=Mariachi+3' },
      
        // Horizontales
        { url: 'https://picsum.photos/300/200?text=Mariachi+H1', descripcion: 'Show para evento empresarial' },
        { url: 'https://picsum.photos/350/220?text=Mariachi+H2' },
        { url: 'https://picsum.photos/400/250?text=Mariachi+H3' },
        { url: 'https://picsum.photos/450/280?text=Mariachi+H4' },
      
        // Verticales
        { url: 'https://picsum.photos/200/300?text=Mariachi+V1' },
        { url: 'https://picsum.photos/220/350?text=Mariachi+V2', descripcion: 'Integrante tocando en vivo' },
        { url: 'https://picsum.photos/250/400?text=Mariachi+V3' },
      
        // Panorámicas
        { url: 'https://picsum.photos/500/200?text=Mariachi+P1', descripcion: 'Panorámica del escenario' },
        { url: 'https://picsum.photos/600/250?text=Mariachi+P2' },
      
        // Muy verticales
        { url: 'https://picsum.photos/200/500?text=Mariachi+Tall1' },
        { url: 'https://picsum.photos/250/600?text=Mariachi+Tall2' },
      
        // Pequeñas
        { url: 'https://picsum.photos/120/140?text=Mini+1' },
        { url: 'https://picsum.photos/140/120?text=Mini+2' },
        { url: 'https://picsum.photos/160/100?text=Mini+3' },
      ],
      
      
      
      nota: 'Este servicio requiere reservar con 48 horas de anticipación.',
      disponible: true,
  
      horario: 'Lun - Dom: 10:00 AM - 10:00 PM',
  
      redes: {
        x: 'https://x.com/mariachilosoles',
        instagram: 'https://instagram.com/mariachilosoles',
        facebook: 'https://facebook.com/mariachilosoles'
      },
  
      streaming: {
        youtube: 'https://youtube.com/@mariachilosoles',
        tiktok: 'https://tiktok.com/@mariachilosoles'
      },

      videos: [
        { 
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          titulo: 'Presentación en vivo'
        },
        { 
          url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
          titulo: 'Evento especial'
        }
      ],

      
  
      whatsapp: '523132435242',
      telefono: '3312345678',
      email: 'mariachilosoles@hotmail.com'
    },
  
    // ...resto de servicios
  ];
  

  constructor(private route: ActivatedRoute,  private sanitizer: DomSanitizer) {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.servicio = this.servicios.find((s) => s.id === id);
    });
  }

  currentYear = new Date().getFullYear();

  // openModal(index: number) {
  //   const modalEl = document.getElementById('imageModal');
  //   if (!modalEl) return;
  
  //   const modalImage = document.getElementById('modalImage') as HTMLImageElement;
  //   if (!modalImage) return;
  
  //   modalImage.src = this.servicio!.galeria[index].url;
  
  //   const modal = new bootstrap.Modal(modalEl); // <- aquí bootstrap es 'any'
  //   modal.show();
  // }
  
  openModal(index: number) {
    if (!this.servicio) return;
  
    const imagen = this.servicio.galeria[index];
  
    // Imagen
    const modalImg = document.getElementById('modalImage') as HTMLImageElement;
    modalImg.src = imagen.url;
  
    // Título (nombre del servicio)
    const modalTitle = document.getElementById('modalTitle')!;
    modalTitle.textContent = this.servicio.nombre; // <--- nombre del servicio
  
    // Descripción de esa imagen (si existe)
    const modalDesc = document.getElementById('modalDescription')!;
    modalDesc.textContent = imagen.descripcion ?? '';
  
    // Mostrar modal
    const modalEl = document.getElementById('imageModal')!;
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }

  getYoutubeThumbnail(url: string): string {
    const id = url.split('v=')[1];
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }

  openVideo(url: string) {
    window.open(url, '_blank');
  }

  openVideoModal(video: { url: string; titulo?: string }) {
    this.videoTitulo = video.titulo || 'Video';
  
    const embedBase = this.buildEmbedUrl(video.url) + '?autoplay=1';
  
    this.videoEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedBase);
  
    const modal = new (window as any).bootstrap.Modal(
      document.getElementById('videoModal')
    );
  
    modal.show();
  }
  

closeVideo() {
  // this.videoEmbedUrl = null; // esto detiene el video
  this.videoEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
}

sanitizeUrl(url: string): SafeResourceUrl {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

convertToEmbed(url: string): string {
  return this.buildEmbedUrl(url);
}


// buildEmbedUrl(url: string): string {
//   if (url.includes("watch?v=")) {
//     const id = url.split("watch?v=")[1].split("&")[0];
//     return `https://www.youtube.com/embed/https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
//   }

//   if (url.includes("youtu.be/")) {
//     const id = url.split("youtu.be/")[1].split("?")[0];
//     return `https://www.youtube.com/embed/${id}`;
//   }

//   return '';
// }

// buildEmbedUrl(url: string): string {
//   let videoId = '';

//   // Caso: https://www.youtube.com/watch?v=ID
//   if (url.includes('watch?v=')) {
//     videoId = url.split('watch?v=')[1].split('&')[0];
//   }

//   // Caso: https://youtu.be/ID
//   else if (url.includes('youtu.be/')) {
//     videoId = url.split('youtu.be/')[1].split('?')[0];
//   }

//   // Caso: https://youtube.com/shorts/ID
//   else if (url.includes('/shorts/')) {
//     videoId = url.split('/shorts/')[1].split('?')[0];
//   }

//   // Si no se pudo obtener ID
//   if (!videoId) return '';

//   return `https://www.youtube.com/embed/${videoId}`;
// }

buildEmbedUrl(url: string): string {
  let videoId = '';

  if (url.includes('watch?v=')) {
    videoId = url.split('watch?v=')[1].split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  } else if (url.includes('/shorts/')) {
    videoId = url.split('/shorts/')[1].split('?')[0];
  }

  if (!videoId) return '';

  return `https://www.youtube.com/embed/${videoId}`;
}







  
}
