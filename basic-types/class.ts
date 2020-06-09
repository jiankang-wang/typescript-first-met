// 6:Class
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is runing`
  }
}

const snake  = new Animal('lily')
console.log(snake.run())

// 1: 继承
class Dog extends Animal {
  back() {
    return `${this.name} is barking`
  }
}
const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.back())

// 2: 重写（多态）
class Cat extends Animal{
  constructor(name) {
    super(name)
  }
  run() {
    return `hello Meow, ${super.run()}`
  }
}

const maomao = new Cat('毛毛')
console.log(maomao.run())
