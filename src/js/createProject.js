const createProject = (title) => {
  let toDos = [];
  const addToDo = (toDo) => {
    toDos.push(toDo);
  };

  const addToDos = (allToDos) => {
    for (let i = 0; i < allToDos.length; i++) {
      toDos.push(allToDos[i]);
    }
  };

  const deleteToDo = (index) => toDos.splice(index, 1);

  const updateToDo = (index, toDo) => {
    project[index] = toDo;
  };

  return { title, toDos, addToDo, addToDos, deleteToDo, updateToDo };
};

export default createProject;
