namespace partial_test {
    interface Todo {
        title: string;
        description: string;
    }

    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
        return { ...todo, ...fieldsToUpdate };
    }

    const todo1 = {
        title: 'organize desk',
        description: 'clear clutter',
    };

    const todo2 = updateTodo(todo1, {
        description: 'throw out trash',
    });
    console.log(todo1)
    console.log(todo2)
}


namespace readonly_test {
    interface Todo {
        title: string;
    }

    const todo: Readonly<Todo> = {
        title: 'Delete inactive users',
    };
    
    // todo.title = 'Hello'; // Error: cannot reassign a readonly property
    
    const wronglyMutableTodo = todo as Todo 
    wronglyMutableTodo.title = 'test' // since todo isn't Object.freeze, it is only a compile time error
    console.log('readonly: wronglyMutableTodo', wronglyMutableTodo)
}


namespace record_test {
    interface PageInfo {
        title: string;
    }
    
    type Page = 'home' | 'about' | 'contact';
    
    const x: Record<Page, PageInfo> = {
        about: { title: 'about' },
        contact: { title: 'contact' },
        home: { title: 'home' }
    };
    
    console.log('record', x)
}


namespace pick_test {
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }
    
    type TodoPreview = Pick<Todo, 'title' | 'completed'>;
    
    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
    };
    console.log('pick', todo)    
}


namespace omit_test {
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }
    
    type TodoPreview = Omit<Todo, 'description'>;
    
    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
    };

    console.log('omit', todo)
}


namespace exclude_test {
    type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
    type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
    type T2 = Exclude<string | number | (() => void), Function>;  // string | number    
}


namespace extract_test {
    type T0 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
    type T1 = Extract<string | number | (() => void), Function>;  // () => void    
}


namespace nonnullable_test {
    type T0 = NonNullable<string | number | undefined>;  // string | number
    type T1 = NonNullable<string[] | null | undefined>;  // string[] 
}


namespace returntype_test {
    type T0 = ReturnType<() => string>;  // string
    type T1 = ReturnType<(s: string) => void>;  // void
    type T2 = ReturnType<(<T>() => T)>;  // {}
    type T3 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
    // type T4 = ReturnType<typeof f1>;  // { a: number, b: string }
    type T5 = ReturnType<any>;  // any
    type T6 = ReturnType<never>;  // any
    // type T7 = ReturnType<string>;  // Error
    // type T8 = ReturnType<Function>;  // Error
}


namespace instancetype_test {
    class C {
        x = 0;
        y = 0;
    }
    
    type T0 = InstanceType<typeof C>;  // C
    type T1 = InstanceType<any>;  // any
    type T2 = InstanceType<never>;  // any
    // type T3 = InstanceType<string>;  // Error
    // type T4 = InstanceType<Function>;  // Error    
}


namespace required_test {
    interface Props {
        a?: number;
        b?: string;
    };
    
    const obj: Props = { a: 5 }; // OK
    
    // const obj2: Required<Props> = { a: 5 }; // Error: property 'b' missing    
}
