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

const resultThree = echoWidthLength('123')
const obj = echoWidthLength({length: 10})
const arr = echoWidthLength([1, 2, 3])
