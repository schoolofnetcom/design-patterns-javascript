function AnimalContainer () {
  const container = [];
  
  function addAnimal (name) {
    container.push(name);
  }
  
  function getAllAnimals() {
    return container;
  }
  
  function removeAnimal(name) {
    const index = container.indexOf(name);
    if(index < 1) {
      throw new Error('Animal not found in container');
    }
    container.splice(index, 1)
  }

  return {
    add: addAnimal,
    get: getAllAnimals,
    remove: removeAnimal
  }
}
  
// const container = AnimalContainer();
// container.add('Hen');
// container.add('Goat');
// container.add('Sheep');

// console.log(container.get()) //Array(3) ["Hen", "Goat", "Sheep"]
// container.remove('Sheep')
// console.log(container.get()); //Array(2) ["Hen", "Goat"]