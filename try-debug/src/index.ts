class Boat {
//   @testDecorator
  color: string = 'red';
 
  private privateProp: string = 'test';

  @testDecorator 
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

//   @testDecorator
  pilot(): void {
    console.log('swish');
  } 
}

function testDecorator(target: any, key: string, desc: any): void {
  console.log('Target: ', target);
  console.log('Key: ', key);
}

const boat = new Boat();

boat.color = 'green';

let count = 0;

setInterval(() => {
    console.log(count++);
}, 1000);