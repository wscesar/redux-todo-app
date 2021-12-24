const ADD_TODO = 'ADD_TODO';
export const addTodo = text => ({
  id: Math.random(),
  type: ADD_TODO,
  text,
})

const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})