(() => {
  interface Client {
    name: string;
    age: number;
    codeName: string;
    address: Address;
    getfullAddress(id: number): void;
  }

  interface Address {
    street: string;
    number: number;
    city: string;
  }

  const person: Client = {
    name: "Tony",
    age: 45,
    codeName: "Ironman",
    address: {
      street: "Main St",
      number: 123,
      city: "NY",
    },
    getfullAddress(id: number) {
      return `${this.name} ${this.address.city} ${id}`;
    },
  };

  const person2: Client = {
    name: "Steve",
    age: 45,
    codeName: "Cap",
    address: {
      street: "Main St",
      number: 123,
      city: "NY",
    },
    getfullAddress(id: number) {
      return `${this.name} ${this.address.city} ${id}`;
    },
  };

    // console.log(person);
    // console.log(person2);
})();
