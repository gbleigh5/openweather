/*
let addPromise = (a,b)=>{
  return new Promise((resolve, reject)=>{
    if(typeof a !== 'number' || typeof b !== 'number') {
      reject('Either A or B is Not a Number');
    }
    else resolve(a+b);
  });
}

addPromise(10, 5).then((soln)=>{
  console.log("Solution: ", soln);
}).catch((err)=>{
  console.log("Error: ", err);
});
*/
