function comparePriority(a, b) {
  if (a.priority > b.priority) {
    return -1;
  }
  if (a.priority < b.priority) {
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
  // return all todo
  const getToDos = () => toDos;

  // sort toDos
  const sortToDos = () => toDos.sort(comparePriority);

  // delete a todo
  const deleteToDo = (index) => toDos.splice(index, 1);

  // change a toDo property
  const updateToDo = (index, toDo) => {
    project[index] = toDo;
  }

  return { title, toDos, addToDo, getToDos, sortToDos, deleteToDo, updateToDo };
};

export default createProject;
