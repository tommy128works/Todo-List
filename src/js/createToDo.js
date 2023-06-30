const createToDo = (
  title,
  description = null,
  dueDate = null,
  isComplete = false,
  favourite = false
) => {
  return { title, description, dueDate, isComplete, favourite };
};

export default createToDo;
