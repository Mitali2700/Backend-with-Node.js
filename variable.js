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

change1((x)=>{
    if(x){
        change2();
    }
    else{
        console.log("error");
    }
})

// We get 2 as an op after 1 sec bcz of 1000