import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return () =>
    keycloak.init({
      config: 'assets/keycloak.json',
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      },
      loadUserProfileAtStartUp: false,
      enableBearerInterceptor: true,
      bearerExcludedUrls: ['/assets', '/clients-public'],
    });
}

// export function initializer(keycloak: KeycloakService): () => Promise<any> {
//     return () =>
//       keycloak.init({
//           config: {
//               url: "https://rocketforward.live/keycloak/auth",
//               realm: "master",
//               clientId: "QBR-Tool"
//           },
//         loadUserProfileAtStartUp: true,
//         initOptions: {
//           onLoad: 'login-required',
//           checkLoginIframe: true
//         },
//         bearerExcludedUrls: []
//       });
//   }
