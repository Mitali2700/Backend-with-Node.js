var count = (function(){
    var x=0;

    function inner(){
            x++
            return x;
        }
    return inner;
})();

count();
count();
// fun();
// fun();
console.log(count());

// How to make variables private in JS?
// Using Closure.