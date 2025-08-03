

import React from 'react'

export function V82Promise() {

    let promise = (b,c) => {
        function callBack(resolve, reject){
          document.write(' pending...');
          setTimeout(()=>{
            let a= b+c;
            if(a===3){resolve('success');}
            else{reject('failed');}
          },3000);
            
        }
        let p = new Promise(callBack);
        
        console.log(p);
        // p.then((msg) => {document.write(msg + ' promise fullfilled...');})
        // .catch((msg) => {document.write(msg + ' promise rejected...');})

        let onFulfil = (msg) => {document.write(msg + ' promise fullfilled...');}
        let onReject = (msg) => {document.write(msg + ' promise rejected...');}
        p.then(onFulfil).catch(onReject);
    }
  
    // let p = promise();

  return (
    <div>
      <h2>callback output {promise(1,2)}</h2><br />
      {/* <h2>callback output {promise(2,1)}</h2> */}
    </div>
  )
}



















// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Promise Practise</title>
// </head>
// <body>
//     <script>
//         function callBack(resolve, reject){
//             let a= 1+2;
//             if(a===3){resolve('success');}
//             else{reject('failed');}
//         }
//         let p = new Promise(callBack)
//         console.log(p);
//     </script>
// </body>
// </html>