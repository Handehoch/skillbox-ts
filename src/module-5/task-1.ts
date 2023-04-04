interface IAgedEntity {
  age: number;
}

// Конфликт имён с Person из другого файла
type IPerson = IAgedEntity & {
  name: string,
}

const persons: IPerson[] = [
  { name: 'Egor', age: 12, },
  { name: 'Lena', age: 25, },
  { name: 'Andrew', age: 16, }
];

type Bridge = IAgedEntity & {
  city: string,
}

const bridges: Bridge[] = [
  { city: 'Saint Petersburg', age: 236, },
  { city: 'Moscow', age: 265, },
  { city: 'Yekaterinbyrg', age: 123, },
]

type Wine = IAgedEntity & {
  manufacturer: string,
  grade: string,
}

const wines: Wine[] = [
  { manufacturer: 'asd', grade: '13', age: 7, },
  { manufacturer: 'affa', grade: '11', age: 2 },
  { manufacturer: 'ggfs', grade: '7', age: 5, },
]

function getOldest<T extends IAgedEntity>(items: T[]): T | null {
  return items.sort((a: T, b: T) => b.age - a.age)[0];
}


console.log(getOldest<IPerson>(persons));
console.log(getOldest<Bridge>(bridges));
console.log(getOldest<Wine>(wines));