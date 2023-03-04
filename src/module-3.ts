// 1)

type House = {
  street: string,
  apartmentCount: number,
  buildInfo: {
      year: number,
      material: string,
  }
}

function getHouse(): House {
  return {
    street: 'Pushkina',
    apartmentCount: 76,
    buildInfo: {
      year: 1996,
      material: 'rocks',
    },
  };
}

function handleHouse(): void {
  const house: House = getHouse();

  console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
  console.log(`build in ${house.buildInfo.year}, build from ${house.buildInfo.material} `);
}

handleHouse();

// Чтобы избежать ошибок, необходимо определять все свойства объекта заранее и не использовать принудительное приведение типов.
// Если некоторые свойства объекта не обязательны, можно сделать их необязательными или присваивать им значения только в зависимости от условий.

// 2)

type Cat = {
  name: string,
  meow: () => string,
}

type Dog = {
  name: string,
  bark: () => string,
}

const cat: Cat = {
  name: 'Pushok',
  meow: () => 'meow!'
};

const dog: Dog = {
  name: 'Bobik',
  bark: () => 'bark!',
}

// Реализация функции whatDoesThePetSay с использованием обычных тайпгардов:
function whatDoesThePetSay(pet: Dog | Cat): string {
  if ('meow' in pet) {
    return pet.meow();
  } else if ('bark' in pet) {
    return pet.bark();
  } else {
    throw new Error('Unknown pet type');
  }
}


// Реализация функции whatDoesThePetSay с использованием пользовательских тайпгардов:
function isCat(pet: Dog | Cat): pet is Cat {
  return 'meow' in pet;
}

function isDog(pet: Dog | Cat): pet is Dog {
  return 'bark' in pet;
}

function whatDoesThePetSay2(pet: Dog | Cat): string {
  if (isCat(pet)) {
    return pet.meow();
  } else if (isDog(pet)) {
    return pet.bark();
  } else {
    throw new Error('Unknown pet type');
  }
}

// Реализация функции whatDoesThePetSay с использованием тайпгардов через оператор in:
function whatDoesThePetSay3(pet: Dog | Cat): string {
  return 'meow' in pet ? pet.meow() : pet.bark();
}

// 3)

enum Directions {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

type Player = {
  x: number,
  y: number,
  move: (direcion: Directions, amount: number) => void,
}

const player: Player = {
  x: 0,
  y: 0,
  move: function (direction: Directions, amount: number): void {
    switch (direction) {
      case Directions.Up:
        this.y += amount;
        break;
      case Directions.Down:
        this.y -= amount;
        break;
      case Directions.Left:
        this.x -= amount;
        break;
      case Directions.Right:
        this.x += amount;
        break;
      default:
        break;
    }
  }
}

player.move(Directions.Up, 1);
player.move(Directions.Down, 2);
player.move(Directions.Left, 2);
player.move(Directions.Right, 3);

console.log(player.x === 1); // true
console.log(player.y === -1); // true

//В переписанном коде мы создали перечисление Direction с четырьмя возможными значениями.
// Теперь вместо массива Directions мы можем использовать перечисление Direction,
// что делает код более понятным и типобезопасным.

// Использование перечислений повлияло на удобство работы в лучшую сторону,
// так как мы можем использовать константы вместо строковых значений.
// Это делает код более понятным и помогает избежать ошибок, связанных с опечатками при вводе строковых значений.
// Кроме того, использование перечислений дает возможность получить список всех возможных значений перечисления.

// 4)

// type User = {
//   name: string;
//   age: number;
//   occupation: string;
// }

// type Admin = {
//   name: string;
//   age: number;
//   role: string;
// }

// export type Person = User | Admin;

// export const persons: Person[] = [
//   {
//     name: 'Max Mustermann',
//     age: 25,
//     occupation: 'Chimney sweep'
//   },
//   {
//     name: 'Jane Doe',
//     age: 32,
//     role: 'Administrator'
//   },
//   {
//     name: 'Kate Müller',
//     age: 23,
//     occupation: 'Astronaut'
//   },
//   {
//     name: 'Bruce Willis',
//     age: 64,
//     role: 'World saver'
//   }
// ];

// export function isUser(person: Person): person is User {
//   return 'occupation' in person;
// }

// export function isAdmin(person: Person): person is Admin {
//   return 'role' in person;
// }

// export function logPerson(person: Person) {
//   let additionalInformation: string;

//   if (isAdmin(person)) {
//     additionalInformation = person.role;
//   } else {
//     additionalInformation = person.occupation;
//   }
//   console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }

// persons.forEach(logPerson);

// 5)

// type User = {
//   type: 'user';
//   name: string;
//   age: number;
//   occupation: string;
// }

// type Admin = {
//   type: 'admin';
//   name: string;
//   age: number;
//   role: string;
// }

// export type Person = User | Admin;

// export const persons: Person[] = [
//   { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
//   { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
//   { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
//   { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
// ];

// export function isAdmin(person: Person): person is Admin {
//   return person.type === 'admin';
// }

// export function isUser(person: Person): person is User {
//   return person.type === 'user';
// }

// export function logPerson(person: Person) {
//   let additionalInformation: string = '';

//   if (isAdmin(person)) {
//     additionalInformation = person.role;
//   }
//   if (isUser(person)) {
//     additionalInformation = person.occupation;
//   }
//   console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }

// console.log('Admins:');
// persons.filter(isAdmin).forEach(logPerson);

// console.log();

// console.log('Users:');
// persons.filter(isUser).forEach(logPerson);

// 6)

type User = {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

type Admin = {
  type: 'admin';
  name: string;
  age: number;
  role: string;
  occupation?: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  {
    type: 'admin',
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    type: 'user',
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    type: 'admin',
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  },
  {
    type: 'user',
    name: 'Wilson',
    age: 23,
    occupation: 'Ball'
  },
  {
    type: 'admin',
    name: 'Agent Smith',
    age: 23,
    role: 'Administrator'
  }
];

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';

export function logPerson(person: Person) {
  let additionalInformation = '';
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(persons: Person[], criteria:{ [P in keyof Person]?: Person[P] }): Person[] {
  return persons.filter(isUser).filter((user) => {
    const criteriaKeys = Object.keys(criteria) as (keyof Person)[];

    return criteriaKeys.every((fieldName) => {
      return user[fieldName] === criteria[fieldName];
    });
  });
}

console.log('Users of age 23:');

filterUsers(
  persons,
  {
    age: 23
  }
).forEach(logPerson);
