function logInfo(name: string, age: number): void {
    console.log(`Info: ${name}, ${age}`);
}

logInfo("Tom", 25);


function calc(a: number, b: number | string) {
    if (typeof b === "string") {
        b = +b
    }
    return a + b;
}

calc(1,2);
calc(1,"3");
