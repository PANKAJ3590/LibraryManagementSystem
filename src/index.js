import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider  domain="dev-5z55f3lrydc47l61.us.auth0.com"
    clientId="TjaBrG2oiRuwBUH6BzViOljRJOdDgH3n"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);


reportWebVitals();
