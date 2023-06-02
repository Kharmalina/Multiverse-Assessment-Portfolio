import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('app')).render(
<React.StrictMode>
    <HashRouter>
        <App />
    </HashRouter>
</React.StrictMode>
);