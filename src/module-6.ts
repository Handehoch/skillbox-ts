// 1)
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// 2)
type First<T extends unknown[]> = T extends [infer U, ...unknown[]] ? U : never;

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1>
type head2 = First<arr2>

// 3)
type MyReadonly<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

type Todo {
  title: string
  description: string
  completed: boolean
}


const todo: MyReadonly<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}


todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK

// 4)
type DeepReadonly<T> =
  T extends (infer U)[] ? ReadonlyArray<DeepReadonly<U>> :
  T extends object ? { readonly [K in keyof T]: DeepReadonly<T[K]> } :
  T;

type X = { 
  x: { 
    a: 1
    b: 'hi'
        z: string
  }
  y: string
}


type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}


type Todo2 = DeepReadonly<X> // should be same as `Expected`


const test: Todo2 = {
    x: {
        a: 1,
        b: 'hi',
        z: 'try change me too',
    },
    y: 'try change me',
};


test.y = 'changed'; // Error
test.x.z = 'changed'; // Error