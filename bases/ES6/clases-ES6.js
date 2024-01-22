(()=>{

    class Avenger {
        name;
        power;

        constructor(name = "No name", power =   0){
            this.name = name;
            this.power = power;
        }
        
    }

    class FlyingAdvenger extends Avenger{
        flying;
        constructor(name, power){
            super(name, power);
            this.flying = true;
        }
    }

    const hulk = new Avenger("hulk", 9000);
    const falcon = new FlyingAdvenger("Falcon", 50);
    console.log(hulk);
    console.log(falcon);

})()