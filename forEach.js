todos = [
    "brush teeth",
    "clean room",
    "exercise",
    "eat healthy",
    "study JAVASCRIPT",
];
todosImportant = [
    "brush teeth !",
    "clean room !",
    "exercise !",
    "eat healthy !",
    "study JAVASCRIPT !",
];

function logTodos(todos , i) {
    console.log(todos, i)
};

todos.forEach(logTodos);
todosImportant.forEach(logTodos)