const createToDo = (
  title,
  description,
  dueDate,
  notes,
  isComplete = false,
  priority = 0
) => {

  return { title, description, dueDate, notes, isComplete, priority };
};

export default createToDo;
