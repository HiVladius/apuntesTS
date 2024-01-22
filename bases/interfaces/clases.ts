(()=>{

    interface Xmen{
        name: string;
        realName: string;
        mutantPower(id: number): string;
    }

    interface Human{
       
        age: number;
    }

    //* implements se usa para forzar a que la clase implemente las interfaces
    
    class Mutant implements Human, Xmen{
        public age!: number;
        public name!: string;
        public realName!: string;
        mutantPower(id: number): string {
            return "Mutant Power";
        }
    }

    // const wolverine = new Mutant();
    // wolverine.age = 45;
    // wolverine.name = "Wolverine";
    // wolverine.realName = "Logan";
    // console.log(wolverine.mutantPower(1));
    // console.log(wolverine);


})()