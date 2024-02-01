import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { KeycloakService } from 'keycloak-angular';
import { AppModule } from './app/app.module';
import { initializer } from './app/utils/app-init';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((module) => {
    // const keycloak = module.injector.get(KeycloakService);
    // console.log("keycloak service--------------------------", keycloak);
    // return keycloak.init().then(() => keycloak.login()).then(() => keycloak.loadUserProfile());

  })
  .catch((err) => console.error(err));

