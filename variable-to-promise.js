// 2022-12-03

let x;
function change1(callback){
    setTimeout(()=>{
        x=1; // Setting x as 1 asynchronously.
        callback(x);
    },1000);
}

//x=4;

function change2(){
    x=x+1;  //x=2
    console.log(x);
}

change1(callback)
.then((x)=>{
    change2();
})
.catch((x)=>{
    console.log("Error");
})
