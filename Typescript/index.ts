interface IUser {
    name: string
    age: number
    logInfo: () => void
    id?: any
    // id: any
}

const user: IUser = {
    name: "Tom",
    age: 25,
    logInfo() {
        console.log(this.name + ' ' + this.age);
    },
    // id: "qweqw"
};
