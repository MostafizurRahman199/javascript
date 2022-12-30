// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let promise =  Promise.race([
    new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Timer : 2 second");
        },2000)
    }),
    
    new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Timer : 3 second");
        },3000)
    }),
    
    new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Timer : 1 second")
        },1000)
    }),
    
       new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Timer : 1/2 second")
        },500)
    })
    
    
    ])
    
    promise.then((item)=>{
        console.log("then block item", item);
    }).catch((err)=>{
        console.log(err);
    })
   
    
