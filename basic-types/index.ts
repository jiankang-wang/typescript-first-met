// 1:简单数据类型
let isDone: boolean = false

let age: number = 123

let desc: string = 'hello world'

let descModel: string = `hello, ${age}`

let u: undefined = undefined

let n: null = null

// 注意的是 undefined是所有类型的子类型
let numberUndefined: number = undefined
let stringUndefined: string = undefined

// 2: 联合数据类型和any类型
// 2.1: any类型
let notSure: any = 4
notSure = 'hello world'
notSure = true
// 2.2 联合类型
let numberOrString: number | string = 111
numberOrString = 'hello world'

// 3: Array 和 Tuple(元祖)
// 3.1: Array
let arrayOfNumber: number[] = [1, 2, 3, 4, 5]
arrayOfNumber.push(6)
let arrayString: string[] = ['1', '2', '3', '4', '5']
arrayString.push('6')
// 3.2 Tuple
let user: [string, number] = ['1', 1]

// 4: interface
// 4.1规定形状（必须按规定来）
interface IPerson {
  name: string;
  age: number
}
let viking: IPerson = {
  name: 'typescript',
  age: 0
}
// 4.2 规定shape(可选参数)
interface IPersonTwo {
  name: string;
  age?: number
}
let vikingTwo: IPersonTwo = {
  name: 'typescriptTwo',
}
// 4.3 规定形状（制度属性）
// readonly 表示是在属性上面用的注意一点
interface IPersonThree {
  readonly id: number
  name: string;
  age: number
}
let vikingThree: IPersonThree = {
  id: 1,
  name: 'typescriptThree',
  age: 1
}
// vikingThree.id = 1 报错

// 5: function
// 5.1 固定参数(函数声明写法)
function add(x: number, y: number): number {
  return x + y
}
const result = add(2, 3)
// 5.2 可选参数（函数声明写法）
function addTwo(x: number, y: number, z?: number): number {
  if (typeof z === 'number' && z) {
    return x + y + z
  }
  return x + y
}
const resultTwo = addTwo(1, 2, 3)
const resultThree = addTwo(1, 2)
// 5.3 函数表达式
const addFour = (x: number, y: number, z: number = 10): number => {
  if (typeof z === 'number' && z) {
    return x + y + z
  }
  return x + y
}

// 5.4 类型推论
const addFout: (x: number, y: number, z?: number) => number = addFour







