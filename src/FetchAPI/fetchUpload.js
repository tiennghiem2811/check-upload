// export default function upImg(data) {
//     console.log('data here' ,data);
//     const dataa = new FormData();
//     dataa.append('file', data);
//     dataa.append('filename', data.fileName.value);
//     return new Promise((resolve, reject) => {
    
//       const url = `http://localhost:3001/upload`
//       fetch(url, {
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: {"dasdad":"sad"}
//       })
//         //.then((response) => response.json())
//         .then((response) => response.json())
//         .then((res) => {
//             //console.log(res)
//           resolve(res);
//           console.log(res)
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }
  export default function upImg(data) {
    // console.log('data here', data);
    
      return new Promise((resolve, reject) => {
          const url = 'http://localhost:3001/upload'
          fetch(url, {
            method: "POST",
            body: data
          })
            .then((response) => response.json())
            .then((res) => {
              resolve(res);
              console.log("data fetch",res)
            })
            .catch((error) => {
              reject(error);
            });
        });
  }