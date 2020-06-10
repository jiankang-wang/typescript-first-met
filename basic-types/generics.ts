//1:基础泛型
function echo<T>(arg: T): T {
  return arg
}

const result = echo('basic')
// console.log(result)

//2: 简单用法
function swap<T, U>(arg: [T, U]): [U, T] {
  return [arg[1], arg[0]]
}
const resultTwo = swap(['string', 111])
// console.log(resultTwo)

//3: 约束泛型
interface IWithLength {
  length: number
}

function echoWidthLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

// const resultThree = echoWidthLength('123')
// const obj = echoWidthLength({length: 10})
// const arr = echoWidthLength([1, 2, 3])

// 4: 类的泛型
class Quere<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

const quere = new Quere<number>()
quere.push(2)

// 5: interface 泛型类
interface IKeyPare<T, U> {
  key: T,
  value: U
}

let kp1:IKeyPare<number, string> = {
  key: 1,
  value: 'test'
}

let arrThree: number[] = [2, 2, 3]
let arrayFour: Array<number> = [1, 2, 3]

// 方法的泛型
interface IPlus<T> {
  (a: T, b: T): T
}

function plus(a: number, b: number) {
  return a + b
}

function plusStr(a: string, b: string) {
  return `${a}~${b}`
}

const a: IPlus<number> = plus
const b : IPlus<string> = plusStr
console.log(a(1, 2))
console.log(b('1', '2'))


