import React, {Suspense, lazy} from 'react';

const demo = lazy(() => import(@/views/demo))


function Fallback() {
    return (
        <>
        
        </>
    )
}

export default function getDefaultRoutes() {
    return [{
        label: 'demo',
        path: 'demo',
        children: [{
            label: 'demo1',
            key: 'demo1',
            path: 'demo1',
            icon: null
        }]
    }]
}