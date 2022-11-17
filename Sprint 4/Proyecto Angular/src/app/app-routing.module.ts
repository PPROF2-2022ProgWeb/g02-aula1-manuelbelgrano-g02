import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { AdminGuard } from './admin.guard';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NormalGuard } from './normal.guard';
import { RegistroComponent } from './registro/registro.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { TiendaComponent } from './tienda/tienda.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: DashboardComponent,
   canActivate: [AdminGuard]},
  {path: 'user', component: UserDashboardComponent,
   canActivate: [NormalGuard]}
   ,
    {path: 'contacto', component: ContactoComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'carrito/:precio', component: CarritoComponent},
    {path: 'sobre-nosotros', component: SobreNosotrosComponent},
    {path: 'galeria', component: GaleriaComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'actualizarusuario/:id', component: ActualizarUsuarioComponent},
    {path: 'actualizarproducto/:productoId', component: ActualizarProductoComponent},
    {path: 'agregarproducto', component: AgregarProductoComponent},
    {path: 'agregarusuario', component: AgregarUsuarioComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
