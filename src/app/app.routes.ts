import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { authGuard } from './core/guards/auth.guard';
import { CatalogComponent } from './pages/catalog/catalog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detalle/:id', component: DetalleProductoComponent },
  { path: 'catalogo', component: CatalogComponent},
  // { path: 'admin/login', component: LoginComponent },
  {
    path: 'admin/gestionar',
    component: DetalleProductoComponent,
    canActivate: [authGuard],
  },
];
