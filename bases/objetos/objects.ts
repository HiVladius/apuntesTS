//Para el uso de objetos en ts se debe de definir el tipo de dato que va a tener cada propiedad del objeto
//En caso de que se quiera definir un objeto con propiedades opcionales se debe de definir con el signo de interrogacion

(()=>{

    let flash: {name: string, age: number, powers:string[], getName?:()=> string} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']        
    }

    flash ={
        name: 'Clark Kent',
        age: 500,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName(){
            return this.name;
        }
    }

    console.log(flash);

})();