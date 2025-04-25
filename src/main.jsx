import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import store from '../src/app/store.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </Provider>
    </BrowserRouter>
    // </StrictMode>,
)
