enum Direction {
  Up,
  Down,
  Left,
  Right
}

// 输出
console.log(Direction.Up)
console.log(Direction[0])

// 赋值并且进行比较
const enum DirectionTwo {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}
const value: string = 'Up'
if (value === DirectionTwo.Up) {
  console.log('go Up!')
}

// 常量枚举 const enum Direction { ... } 可以提高性能