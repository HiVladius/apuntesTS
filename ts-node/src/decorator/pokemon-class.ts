//* Decorator: Es una funcion que expande la clase y agrega funcionalidades a la misma

function printToConsole(contructor: Function){
    // console.log(contructor);

}
//* Decorador con funcion anonima
const printToConsoleConditional = (print: boolean = false):Function => {
    if(print){
        return printToConsole
    }else{
        return ()=>{}
    }
    
}
//* Bloquear la modificacion de la clase
const bloquearPrototipo = (constructor: Function) => {
    Object.seal(constructor);
    Object.seal(constructor.prototype);

}

//* Factory Decorator se tiene que poner () para que se ejecute la funcion
function CheckValidPokemonId(){
    return function(target: any, propertykey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]){
            if(args[0] < 0 || args[0] > 150){
                throw new Error('Invalid Pokemon ID');
            }
            const result = originalMethod.apply(this, args);
            return result;
        }
        
    }
}



@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon{
    
    public publicApi: string = 'https://pokeapi.co'
    
    constructor(
        public name: string,
    ){}

    @CheckValidPokemonId()
    savePokemonToDB(id: number){
        console.log(`Pokemon saved to DB ${id}`);

    }
}