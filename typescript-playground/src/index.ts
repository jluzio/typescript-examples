export class C {
    private x = 10
    getX = () => this.x;
    setX = (newVal: number) => { this.x = newVal; }
}

export let x = new C();
export let y = { ...{ some: "value" } }
console.log("test: 1")
console.log("test: 2")
console.log("test: 3")