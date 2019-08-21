namespace readonly_test {
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
namespace partial_test {
    interface Todo {
        title: string;
    }
    
    const todo: Readonly<Todo> = {
        title: 'Delete inactive users',
    };
    
    // todo.title = 'Hello'; // Error: cannot reassign a readonly property
}
