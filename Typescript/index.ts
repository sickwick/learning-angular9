interface SayHello {
    sayHello: () => void
}

class User implements SayHello {
    constructor(private name: string, protected age: number) {
    }

    sayHello() {
        console.log(this.name + ' hello');
    }
}
