// Un paramentro rest es un parametro que recibe un numero indefinido de argumentos

(()=>{
    const fullName = (firstName: string, ...restArgs: string[]):string =>{ // ...restArgs: string[] -> rest operator -> recibe un numero indefinido de argumentos
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent', 'Superman', 'El mas capo', 'El mas groso');
    console.log({superman});
    
})()