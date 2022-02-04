const somethingsWillHappen = () => {
    return new Promise((resolve, reject)=> {
        if(true){
            resolve('Hey está correcto');
        }else{
            reject('Lo siento no salió bien');
        }
    });
};

somethingsWillHappen()
.then(response => console.log(response))
.catch(error => console.error(error));

const somethingsWillHappen2 =() => {
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(()=>{
                resolve('True');
            }, 2000)
        }else{
            const error = new Error('Salió mal');
            reject(error);
        }
    })
}

somethingsWillHappen2()
.then(response => console.log(response))
.catch(error => console.error(error));

Promise.all([somethingsWillHappen(), somethingsWillHappen2()])
.then(response=>{
    console.log('Array of results', response);
})
.catch(error => {
    console.error(error);
})