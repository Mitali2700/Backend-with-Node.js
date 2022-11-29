// 2022-11-29
let err;

function transact(title,callback){  // title argument should Ucase 

    if (title.toUpperCase()!=title)
        err = new Error("Uppercase Error");
    callback(err);
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

/* OP:
DEALER as done transaction
WHOLESALER as done transaction
*/