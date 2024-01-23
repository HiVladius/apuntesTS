//* Decorator: Es una funcion que expande la clase y agrega funcionalidades a la misma

function printToConsole(contructor: Function){
    console.log(contructor);

}

@printToConsole
export class Pokemon{
    
    public publicApi: string = 'https://pokeapi.co'
    
    constructor(
        public name: string,
    ){}
}