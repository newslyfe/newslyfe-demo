
import './i18n';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProviders } from './providers/AppProviders';
import { ModalProvider } from './components/Modal';
import { SEOWrapper } from './routing';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // React.StrictMode is disabled for debugging purposes.
  <ModalProvider>
    <AppProviders>
      <BrowserRouter>
        <SEOWrapper>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/c/:countrySlug" element={<App />} />
          </Routes>
        </SEOWrapper>
      </BrowserRouter>
    </AppProviders>
  </ModalProvider>
);
