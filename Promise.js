// 2022-12-02

let cleanRoom = new Promise((resolve,reject)=>{
    let isClean=false;

    if(isClean)
        resolve("Kitchen is clean");
    else
        reject("Kitchen unclean ");

});

cleanRoom
.then((resolved)=>{
    console.log(resolve+ "You will get an ice-cream");
})  // We can use then() and catch() in chain form

// .then((rejected)=>{
//     console.log(rejected+ "You will not get an ice-cream")
// })
.catch((rejected)=>{
    console.log(rejected+ "You will not get an ice-cream")
})

// Here we reduce:
//maintenance issue
//check error only once.
