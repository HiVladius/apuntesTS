(()=>{

    type Hero = {
        name: string, 
        age?: number, 
        powers:number[],
        getName?:()=> string
    }

    let myCustomVariable: string | number | Hero = 'Jose'; //Union types: Se puede definir una variable con mas de un tipo de dato
    console.log(typeof myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Jose',
        age: 20,
        powers: [1,2,3],
        
    }

    console.log(typeof myCustomVariable);
    
    
    


})();