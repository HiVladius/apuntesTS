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
//* Decorador de propiedades ocultas
function readOnly(isWritable: boolean = true): Function{
    return function(target: any, propertykey: string, ){
        const descriptor: PropertyDescriptor = {
            get(){
                console.log(this);
                
                return 'Hello World'
            },
            set(this, val){
                console.log(this, val);
                Object.defineProperty(this, propertykey, {
                    value: val,
                    writable: !isWritable,
                    configurable: true,
                    enumerable: false
                })
            }
            
        }
           
        return descriptor;
    }
}


@bloquearPrototipo
@printToConsoleConditional(false)

export class Pokemon{
    
    @readOnly(true)    
    public publicApi: string = 'https://pokeapi.co'
    
    constructor(
        public name: string,
    ){}

    @CheckValidPokemonId()
    savePokemonToDB(id: number){
        console.log(`Pokemon saved to DB ${id}`);

    }
}