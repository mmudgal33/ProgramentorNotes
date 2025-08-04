//rfce rafc
import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './AppRouter'

export function IndexRouter() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </React.StrictMode>
    )
}



