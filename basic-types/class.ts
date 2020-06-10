// 6:Class
class Animal {
  name: string;
  static categories: string[] = ['mammal', 'bird'];
  static isAnimal(a) {
    return a instanceof Animal
  }
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is runing`
  }
}
// 静态属性的访问, 不需要实例话
console.log(Animal.categories)

// 实例化
const snake  = new Animal('lily')
// 静态方法
console.log(Animal.isAnimal(snake))
console.log(snake.run())
console.log(snake.name)

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

// 修饰符 readonly private protected

// interface 和 class 连用 implements
// 公共提取出来
interface Radio {
  switchRadio(): void;
}
interface Battery {
  checkBatteryStatus()
}
// 接口合并
interface RadioWithbattery extends Radio {
  checkBatteryStatus()
}

class Car implements Radio {
  switchRadio() {

  }
}

class Cellphone implements Radio, Battery {
  switchRadio() {

  }
  checkBatteryStatus() {

  }
}

class CellphoneTwo implements RadioWithbattery {
  switchRadio() {

  }
  checkBatteryStatus() {

  }
}





