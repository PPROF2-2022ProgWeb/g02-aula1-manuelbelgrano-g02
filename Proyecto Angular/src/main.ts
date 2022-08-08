import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  function comprobarLogin(){
    if (typeof (Storage) !== 'undefined') {
      console.log("Localstorage disponible");
  } else {
      console.log("Incompatible con localstorage");
  }
   }
   comprobarLogin();

        /Obtengo el nombre de usuario/
         var nombre = localStorage.getItem("usuario");
         console.log(nombre);

  