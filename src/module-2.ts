// 1)

function arrayDiff<T>(firstArray: T[], secondArray: T[]): T[] {
  return firstArray.filter((item: T) => !secondArray.includes(item));
}

console.log(arrayDiff([1, 2, 3, 4], [5, 6]));

// 2)

/*
const arr0 = [1, 2, 3] // number[]
*/
const arr1: (number | null)[] = [1, 2, 3, null]; 
const arr2: (string | boolean)[] = ['safety', '=', true];
const arr3: (number[] | string[])[] = [
  [1, 2, 3, 4, 5],
  ['1', '2', '3', '4', '5'],
];

type AnyType = number | boolean | string | undefined;
const arr4: any = [
  1, 2, true, 'str', undefined
];

interface IUser {
  id: number;
  name: string;
}

const arr5: IUser[] = [
  {
    id: 1,
    name: 'Студент',
  },
  {
    id: 2,
    name: 'Наставник',
  }
]

// 3)

function capitalizeWords(query: string): string {
  return query
    .split(' ')
    .map((str: string) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ');
}

console.log(capitalizeWords('Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.'));

// 4)

function capitalizeWordsWithRemove(query: string): string {
  const words: string[] = query
    .split(' ')
    .map((str: string) => str.charAt(0).toUpperCase() + str.slice(1));

    words.splice(words[0].length, 1);
    
    return words.join(' ');
}

console.log(capitalizeWordsWithRemove('Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.'));

// 5)

type ObjectWithKeys = { [key: string]: any };

function areEqual(obj1: ObjectWithKeys, obj2: ObjectWithKeys): boolean {
  const obj1Keys: string[] = Object.keys(obj1);
  const obj2Keys: string[] = Object.keys(obj2);
  
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let key of obj1Keys) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  for (let key of obj2Keys) {
    if (!obj1.hasOwnProperty(key) || obj2[key] !== obj1[key]) {
      return false;
    }
  }

  return true;
}

// 6)

export type User = {
  name: string;
  age: number;
  occupation: string;
};

export const users: User[] = [
  {
    name: 'Roman Abramov',
    age: 25,
    occupation: 'Millionaire'
  },
  {
    name: 'Andrey Fox',
    age: 23,
    occupation: 'Developer'
  }
];

export function logPerson(user: Person): void {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);

// 7)

export type Admin = {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: 'Roman Abramov',
    age: 25,
    occupation: 'Millionaire'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Andrey Fox',
    age: 23,
    occupation: 'Developer'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
];

persons.forEach(logPerson);