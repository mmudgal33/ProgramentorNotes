// public index.html just before </head> paste CDN
// node_modules boostrap dist(distribute) bootstrap.min.css as we use mini version, bootstrap.css if main file required
// npm install --save bootstrap
// npm uninstall bootstrap
// npm install --save bootstrap@4.3.1
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function V33BootstrapCDN() {
  return (
    <div>
      <h1 className='bg-success text-white p-5'>welcome to learning never ends</h1>
    </div>
  )
}

export default V33BootstrapCDN
