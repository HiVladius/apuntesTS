import powers from "../data/powers";


export default class Hero {
  constructor(
    public name: string,
    public age: number,
    public powerId: number,
  ) {}

  get power(){
    return powers.find(power => power.id === this.powerId)?.desc || 'not found';
  }
}

export class Villain {
  constructor(
    public name: string,
    public age: number,
    public power: string,
    public identity: string
  ) {}
}


