(()=>{
    type Avengers = {
        nombre: string,
        arma: string
    }

    const ironman: Avengers = {
        nombre: 'Tony',
        arma: 'Armorsuit'
    }

    const capitan: Avengers = {
        nombre: 'Steve',
        arma: 'Escudo'
    }

    const thor: Avengers = {
        nombre: 'Thor',
        arma: 'Mjolnir'
    }

    const avengers: Avengers[] = [ironman, capitan, thor]

    for (const avenger of avengers) {
        console.log(avenger.nombre, avenger.arma)
    }
})()