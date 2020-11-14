class Server {
    static VERSION = '1.0.3';

    // Объявляем через конструктор
    // public name: string;
    // protected ip: number;

    private status: string = "working";

    // constructor(name, ip) {
    //     this.name = name;
    //     this.ip = ip;
    // }

    constructor(public name: string, private ip: number) {
    }

    turnOn() {
        status = "working";
    }

    turnOff() {
        status = "offline"
    }

    getStatus(): string {
        return this.status;
    }

}

const server: Server = new Server("test", 12);
