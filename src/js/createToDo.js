// highest priority is 5; lowest is 0
const createToDo = (
  title,
  description,
  dueDate,
  isComplete = false,
  priority = 0
) => {
  return { title, description, dueDate, isComplete, priority };
};

export default createToDo;
