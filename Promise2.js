
function transact(title)
{
    return new Promise((resolve,reject)=>{
        let rand = Math.floor(Math.random() * 100);
  if (title.toUpperCase() != title) 
  err = new Error("Uppercase Error");
  setTimeout(() => { (title);}, rand);})
}
// let sale= Promise((title){

//     if(title)
//         resolve("DEALER");
//     else
//         reject("DEALER");
// });

// .then(){

// }

transact("DEALER")
.then((resolved)=>{
    console.log(resolved+" perform transaction")
    return transact("WHOLESALER")
})
.then((resolved)=>{
    console.log(resolved+" perform transaction")
    // return transact("WHOLESALER")
})
.catch((resolved)=>{
    console.log(resolved+" perform transaction")
    // return transact("WHOLESALER")
})