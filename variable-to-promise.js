// 2022-12-03

// let x;
async function change1(){
    let promise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            x=1; // Setting x as 1 asynchronously.
            resolve();
        },1000);
    })
    let result = await promise;
}

//x=4;

function change2(){
     x=x+1;  //x=2
     console.log(x);
}

change1()
.then(()=>{
    change2();
})
.then((param)=>{
    console.log(param);
})

//Promise chaining 

