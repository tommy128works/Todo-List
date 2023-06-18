function comparePriority(a, b) {
  if (a.priority < b.priority) {
    return -1;
  }
  if (a.priority > b.priority) {
    return 1;
  }
  return 0;
}

// i will need a global array to store projects
const createProject = (title) => {
  let toDos = [];
  // add todo to project
  const addToDo = (toDo) => {
    toDos.push(toDo);
  };

  // add all todos
  const addToDos = (allToDos) => {
    for (let i = 0; i < allToDos.length; i++) {
      toDos.push(allToDos[i]);
    }
  }

  // sort toDos
  const sortToDos = () => toDos.sort(comparePriority);

  // delete a todo
  const deleteToDo = (index) => toDos.splice(index, 1);

  // change a toDo property
  const updateToDo = (index, toDo) => {
    project[index] = toDo;
  };

  return { title, toDos, addToDo, addToDos, sortToDos, deleteToDo, updateToDo };
};

export default createProject;
