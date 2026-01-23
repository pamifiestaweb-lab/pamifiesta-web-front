import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  telefono: string;
  domicilio: string;
  horario: string;
  precio: number;
  descuento: number;
  tipo: 'producto' | 'servicio';
  estado: string;
  municipio: string;
  colonia: string;
  imagen_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private servicios: Servicio[] = [
    {
      id: 1,
      nombre: 'Mariachi Los Reyes',
      descripcion: 'El mejor mariachi para tus fiestas.',
      telefono: '555-1234-5678',
      domicilio: 'Calle Falsa 123, Col. Centro',
      horario: '10:00 - 22:00',
      precio: 1500,
      descuento: 10,
      tipo: 'servicio',
      estado: 'Ciudad de México',
      municipio: 'Cuauhtémoc',
      colonia: 'Centro',
      imagen_url: 'https://placehold.co/600x400',
    },
    {
      id: 2,
      nombre: 'Brincolín Fiesta Kids',
      descripcion: 'Brincolines seguros y divertidos.',
      telefono: '555-9876-5432',
      domicilio: 'Av. Siempre Viva 742',
      horario: '9:00 - 20:00',
      precio: 1200,
      descuento: 0,
      tipo: 'producto',
      estado: 'Ciudad de México',
      municipio: 'Iztapalapa',
      colonia: 'Santa Cruz',
      imagen_url: 'https://placehold.co/600x400',
    },
  ];

  getAll(): Observable<Servicio[]> {
    return of(this.servicios);
  }

  getById(id: number): Observable<Servicio | undefined> {
    const servicio = this.servicios.find((s) => s.id === id);
    return of(servicio);
  }
}
