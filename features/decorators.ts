// class Boat {
//   color: string = 'red';

//   get formattedColor(): string {
//     return `This boats color is ${this.color}`;
//   }

//   @testDecorator
//   pilot(): void {
//     console.log('swish');
//   } 
// }

// function testDecorator(target: any, key: string): void {
//   console.log('Target: ', target);
//   console.log('Key: ', key);
// }

let count = 0;

setInterval(() => {
  const num = 10;
  console.log(`Count is ${count++}`);
}, 1000);