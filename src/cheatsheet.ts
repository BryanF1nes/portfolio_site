// Basic types
let id: number = 5;
let company: string = "My Company";
let isTrue: boolean = true;

// arrays
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = ["Types", 23, true, { 1: 1 }];

// Tuple
let person: [number, string, boolean] = [1, "Bryan", true];

// Tuple array
let employee: [number, string][];
employee = [
  [1, "Bryan"],
  [2, "John"],
];

// Union
let userID: number | string;

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction1.Down);
console.log(Direction2.Up);

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type assertion
let cid: any = 1;

// Either of these will work
// let customerId = <number>cid
// let customerId = cid as number

// Functions
function addSums(x: number, y: number): number {
  return x + y;
}

// void is used when you dont need to return a value
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  // readonly properites
  readonly left?: number;
  id: number;
  name: string;
  // ? represents optional
  age?: number;
}

const user1: UserInterface = {
  id: 2,
  name: "Bob",
};

// interfaces don't allow unions or primatives
// use Types instead

// interface with functions
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  // public by default | can set to private or protected
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  id: number;
  name: string;

  register() {
    return `${this.name} is now registered`;
  }
}

const Bob = new Person(1, "Bob");

// Subclass
class Employee extends Person {
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
  position: string;
}

const emp = new Employee(2, "Barry", "Recruiter");

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let stringArray = getArray<string>(["1", "2", "3", "4"]);
