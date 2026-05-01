import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../../core/services/catalog.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Categoria {
  id: string;
  nombre: string;
  colorFondo: string;
  icono: string; // aquí usaremos clases Bootstrap Icons o FontAwesome
}

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  tipo: 'producto' | 'servicio';
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  // catalogo = inject(CatalogService);
  // servicios$ = this.catalogo.getAll();
  collapsable = false;
  catalogo = inject(CatalogService);
  servicios$ = this.catalogo.getAll();

  servicios: Servicio[] = [
    {
      id: 1,
      nombre: 'Mariachi Los Soles',
      descripcion: 'Ameniza tus eventos con música en vivo',
      categoria: 'entretenimiento',
      tipo: 'servicio',
      precio: 2500,
      imagen: 'https://picsum.photos/150/100?text=Mariachi',
    },
    {
      id: 2,
      nombre: 'Brincolín Castillo',
      descripcion: 'Ideal para fiestas infantiles',
      categoria: 'renta',
      tipo: 'producto',
      precio: 800,
      imagen: 'https://picsum.photos/150/100?text=Brincolin',
    },
    {
      id: 3,
      nombre: 'Pastel de 3 Leches',
      descripcion: 'Pastel decorado para 15 personas',
      categoria: 'reposteria',
      tipo: 'producto',
      precio: 600,
      imagen: 'https://picsum.photos/150/100?text=Pastel',
    },
    {
      id: 4,
      nombre: 'Globos con helio',
      descripcion: 'Decoración personalizada con globos',
      categoria: 'decoracion',
      tipo: 'producto',
      precio: 350,
      imagen: 'https://picsum.photos/150/100?text=Globos',
    },
    {
      id: 5,
      nombre: 'Fotógrafo profesional',
      descripcion: 'Cobertura fotográfica del evento',
      categoria: 'otros',
      tipo: 'servicio',
      precio: 1500,
      imagen: 'https://picsum.photos/150/100?text=Fotografo',
    },
  ];

  estadoSeleccionado = 'Ciudad de México';
  municipioSeleccionado = 'Cuauhtémoc';
  coloniaSeleccionada = 'Centro';

  estados = ['Ciudad de México'];
  municipios = ['Cuauhtémoc', 'Iztapalapa'];
  colonias = ['Centro', 'Santa Cruz'];

  buscar() {
    // Aquí en el futuro puedes filtrar resultados por ubicación
    console.log(
      'Buscar por:',
      this.estadoSeleccionado,
      this.municipioSeleccionado,
      this.coloniaSeleccionada
    );
  }

  // onCategoriaClick(id: string) {
  //   alert(`Filtrando por categoría: ${id}`);
  //   // Aquí en el futuro llamarías a un filtro real, o navegas a ruta filtrada
  // }

  categoriaSeleccionada: string | null = null;

  get serviciosFiltrados(): Servicio[] {
    if (!this.categoriaSeleccionada) return this.servicios;
    return this.servicios.filter(
      (s) => s.categoria === this.categoriaSeleccionada
    );
  }

  onCategoriaClick(id: string | null) {
    this.categoriaSeleccionada = id;
  }

  obtenerUbicacion() {
    // Aquí puedes implementar la lógica para obtener la ubicación del usuario

    // Por ahora, simplemente mostramos un mensaje
    console.log('Obteniendo ubicación del usuario...');
    // Simulamos una ubicación
    this.estadoSeleccionado = 'Ciudad de México';
    this.municipioSeleccionado = 'Cuauhtémoc';
    this.coloniaSeleccionada = 'Centro';
    this.buscar();
  }

  categorias: Categoria[] = [
    {
      id: 'entretenimiento',
      nombre: 'Entretenimiento',
      colorFondo: '#E3F2FD', // azul claro
      icono: 'bi-music-note-list',
    },
    {
      id: 'renta',
      nombre: 'Renta de Equipos',
      colorFondo: '#FFF9C4', // amarillo claro
      icono: 'bi-box-seam',
    },
    {
      id: 'decoracion',
      nombre: 'Decoración y Ambientación',
      colorFondo: '#F5F5DC', // crema
      icono: 'bi-palette',
    },
    {
      id: 'reposteria',
      nombre: 'Alimentos y Repostería',
      colorFondo: '#FCE4EC', // rosa suave
      icono: 'bi-cup-straw',
    },
    {
      id: 'otros',
      nombre: 'Servicios Adicionales',
      colorFondo: '#F0F0F0', // gris claro
      icono: 'bi-briefcase',
    },
  ];
}
