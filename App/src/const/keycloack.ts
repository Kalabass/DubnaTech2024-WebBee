import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
});

await keycloak
  .init({
    onLoad: 'check-sso',
    pkceMethod: 'S256',
  })
  .catch(console.error);

export { keycloak };
