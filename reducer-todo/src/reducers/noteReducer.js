const list = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];
  



export const initialState = {
    todo: list,
    task: ""
};

export const noteReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todo: state.todo.map(task => {
            if (task.id === clickedItemId) {
              return {
                ...task,
                completed: !task.completed
              };
            } else {
              return task;
            }
          })
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todo: state.todo.filter(task => (task.completed !== true))
      };
    case "ADD_TASK":
        const newTask = {
            task: taskName,
            id: new Date(),
            completed: false
          };
        return {
          ...state,
          todo: [...state.todo, newTask]
        };  
    default:
      return state;
  }
};
