// 2022-11-29
// We had made fun asynchronous.

let err;

function transact(title,callback){  // title argument should Ucase 
    let rand = Math.floor(Math.random()*100);
    if (title.toUpperCase()!=title)
        err = new Error("Uppercase Error");
    // callback(err);
    setTimeout(()=> {callback(err)},rand);
}

transact("DEALER", (err)=>{
    if(err)
        console.log(err);
    else
        console.log("DEALER as done transaction");
});

transact("WHOLESALER", (err)=>{
    if(err)
        console.log(err);
    else
        console.log("WHOLESALER as done transaction");
});


//console.log(Math.floor(Math.random()*100));


// For maintaining the order we use the concept : CallBack CHAINING 