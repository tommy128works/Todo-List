function comparePriority(a, b) {
  if ( a.priority > b.priority){
    return -1;
  }
  if ( a.priority < b.priority){
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

  // how to find a toDo?
  

  // delete a todo

  // change a toDo property

  return { title, toDos, addToDo, getToDos, sortToDos };
};

export default createProject;
