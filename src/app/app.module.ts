import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { TiendaComponent } from './tienda/tienda.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';




@NgModule({
  declarations: [
    AppComponent,
    SobreNosotrosComponent,
    GaleriaComponent,
    ServiciosComponent,
    FooterComponent,
    ContactoComponent,
    LoginComponent,
    RegistrarseComponent,
    TiendaComponent,
    HomeComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
