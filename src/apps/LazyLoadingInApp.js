import React from 'react'
import { Suspense, lazy } from "react"
// for lazy loading component must be export default

import LazyLoadingComp1 from './LazyLoadingComp1';
import LazyLoadingComp2 from './LazyLoadingComp2';
const Comp1 = lazy(() => import('./LazyLoadingComp1'))
const Comp2 = lazy(() => import('./LazyLoadingComp2'))

// const Comp1 = React.lazy(() => import('./LazyLoadingComp1'));
// const Comp2 = React.lazy(() => import('./LazyLoadingComp2'));


export function LazyLoadingInApp() {

    return (
        <div>
            <h1>Lazy Loading</h1>
            <LazyLoadingComp1 />
            <Suspense fallback={<div>Loading Comp2 ...</div>}>
                <LazyLoadingComp2 />
            </Suspense>

            <hr />

            <h1>Lazy Loading Dynamic Import</h1>
            <Comp1 />
            <Suspense fallback={<div>Loading Comp2 ...</div>}>
                <Comp2 />
            </Suspense>
        </div>
    )
}






// LazyLoadingInApp











