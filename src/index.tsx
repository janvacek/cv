import React from 'react'
import ReactDOM from 'react-dom/client'
import '~/src/Styles/index.scss'
import App from './App'
import {ConfigContextProvider} from "~/src/Infrastructure/WebConfigContext/ConfigContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ConfigContextProvider>
            <App/>
        </ConfigContextProvider>
    </React.StrictMode>
);
