import React, { useState, useEffect } from 'react';


export const V83JavascriptAsynAwait = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};






















// export function V83JavascriptAsynAwait() {
//     let asynAwait = async (b,c) => {
//         // function callBack(resolve, reject){
        
//         //   document.write(' pending...');
//           await setTimeout(()=>{
//             let a= b+c;
//             if(a===3){return('success');}
//             else{return('failed');}
//           },3000);
            
//         // }
//         // let p = new Promise(await callBack);
        
//         // console.log(p);
//         p.then((msg) => {document.write(msg + ' promise fullfilled...');})
//         .catch((msg) => {document.write(msg + ' promise rejected...');})

//         let msg = asynAwait();

//         // let onFulfil = (msg) => {document.write(msg + ' promise fullfilled...');}
//         // let onReject = (msg) => {document.write(msg + ' promise rejected...');}
//         asynAwait.then(()=>{console.log(msg);}).catch(()=>{console.log(msg);});
//     }
//   return (
//     <div>
//     <h2>callback output {asynAwait(1,2)}</h2><br />
    
//   </div>
//   )
// }


