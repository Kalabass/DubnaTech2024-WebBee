import React, { createContext, useContext } from 'react';
import { keycloak } from '../const/keycloack';

const KeycloakContext = createContext(keycloak);

export const useKeycloak = () => useContext(KeycloakContext);

export const KeycloakProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <KeycloakContext.Provider value={keycloak}>
    {children}
  </KeycloakContext.Provider>
);
