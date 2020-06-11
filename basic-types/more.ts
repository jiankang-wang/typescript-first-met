// 类型别名
// 1: 别名前
function sum(x: number, y: number): number {
  return x + y
}
const sumTwo: (x: number, y:number) => number = sum

// 2: 别名后
type PlusALias = (x: number, y: number) => number
function sumThree(x: number, y: number): number {
  return x + y
}
const sumFour: PlusALias = sumThree

// 3: 联合类型
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

// 4: 类型断言
function getLength(input: string | number): number {
  if ((<string>input).length) {
    return (<string>input).length
  } else {
    input.toString().length
  }
}
console.log(getLength(10))