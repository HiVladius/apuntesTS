(()=>{

    //* La interfaz es similar a Type, pero visualmente es diferente, 
    //* puesto que interface no usa "=" y type si
   interface Hero  { 
        name: string, 
        age?: number, 
        powers:number[],
        getName?:()=> string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1,2,3]        
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: [1,2,3,4,5,6,7,8,9,10],
        getName(){
            return this.name;
        }      
    }

    // superman.name='Miguel Conde'
    // console.log(superman)

})()