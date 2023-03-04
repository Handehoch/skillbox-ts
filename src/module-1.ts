export interface IActor {
  name: string
  firstName: string,
  country: string,
  city: string,
  hasOskar: boolean,
  filmsCount: number,
  age: string,
  languages: string[],
};

// 1)

// Ошибка в данном коде заключается в том,
// что свойство age объекта actor определено как строка, а не число.
// В результате, когда мы пытаемся добавить число 20 к строке '14', происходит конкатенация строк, вместо сложения чисел.
// Чтобы исправить ошибку, мы должны преобразовать строку age в число.
// Это можно сделать с помощью функции parseInt() или parseFloat().

const howOldWillBeActorAfterTwentyYears = (actor : IActor) => {
  return parseInt(actor.age) + 20;
}

// Теперь код будет возвращать ожидаемое число 34.

// 2)

// Ошибка в данном коде заключается в том, что свойства posX и posY не существуют в объекте события MouseEvent. Вместо этого, мы должны использовать свойства clientX и clientY, чтобы получить координаты клика относительно окна браузера.
// Чтобы исправить ошибку, мы должны заменить posX и posY на clientX и clientY, соответственно. Например:
// javascript

document.addEventListener('click', (e: MouseEvent) => {
  const coords = [e.clientX, e.clientY];
  console.log(`Point is ${coords[0]}, ${coords[1]}`);
});

// Теперь код будет выводить координаты клика в консоль.

// 3)

// Первый кусок кода:

// Эта функция принимает массив объектов и использует метод reduce() для вычисления количества мужчин, возраст которых старше 18 лет.
// В каждой итерации reduce() функция проверяет свойства age и isMale текущего элемента массива.
// Если age больше 18 и isMale равно true, то эта итерация добавляет 1 к аккумулятору acc.
// В конце выполнения reduce() функция возвращает окончательное значение аккумулятора.
// Таким образом, этот код может использоваться для подсчета количества мужчин, возраст которых старше 18 лет, в массиве объектов.

// Второй кусок кода:

// Эта функция также принимает массив объектов, но тип каждого объекта определен как Human, который имеет свойства name, age и gender.
// Функция также использует метод reduce() для вычисления количества мужчин, возраст которых старше 18 лет.
// В каждой итерации reduce() функция проверяет свойства age и gender текущего элемента массива.
// Если age больше 18 и gender равен 'male', то эта итерация добавляет 1 к аккумулятору acc. В конце выполнения reduce() функция возвращает окончательное значение аккумулятора.
// Отличие этого кода от предыдущего заключается в том, что он использует типизацию с помощью TypeScript.
// Как и в первом примере, этот код может использоваться для подсчета количества мужчин, возраст которых старше 18 лет, в массиве объектов.

// 4)

function reverseWords(inputStrings: string): string {
  const reversedStrings: string[] = [];
  for (let str of inputStrings.split(' ')) {
    reversedStrings.push(str.split('').reverse().join(''));
  }

  return reversedStrings.join(' ');
}

// 5)

function squareDigits(num: number): number {
  if (num < 0) {
    return num;
  }

  const digits = num.toString().split(''); 
  const squaredDigits = digits.map((digit: string) => (parseInt(digit) ** 2).toString()); 
  return parseInt(squaredDigits.join('')); 
}

// 6)

function digitalRoot(num: number): number {
  let sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0); 
  if (sum < 10) return sum;
  return digitalRoot(sum);
}

console.log(digitalRoot(122));