import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'detalle/:id', loadComponent: () => import('./pages/detalle-producto/detalle-producto.component').then(m => m.DetalleProductoComponent) },
  { path: 'catalogo', loadComponent: () => import('./pages/catalog/catalog.component').then(m => m.CatalogComponent) },
  { path: 'admin/gestionar', loadComponent: () => import('./pages/admin-panel/admin-panel.component').then(m => m.AdminPanelComponent), canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];
