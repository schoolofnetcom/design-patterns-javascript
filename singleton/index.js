class Singleton {
  static getInstance() {
    if (!this.instance) {
        this.instance = new Object;
        this.instance.name = "new object";
        this.instance.version = Math.floor(Math.random() * 1000);
    } 
    return this.instance;
  };
}


function compare(object1, object2) {
  return object1 === object2;
}

const object1 = Singleton.getInstance();
const object2 = Singleton.getInstance();

console.log(compare(object1, object2));