//Importamos modulos del router de angular

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";



//Importamos los componentes


import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { TiendaComponent } from './tienda/tienda.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FooterComponent } from './footer/footer.component';
import { CarritoComponent } from './carrito/carrito.component';





const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registrarse', component: RegistrarseComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'carrito', component: CarritoComponent},
    {path: 'sobre-nosotros', component: SobreNosotrosComponent},
    {path: 'galeria', component: GaleriaComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'footer', component: FooterComponent},
    {path: '**', component: HomeComponent}
];
    

//Exportamos el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);