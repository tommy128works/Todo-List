const toDoFactory = (title, description, dueDate, notes, isComplete = false, priority = 0) => {
  // title="default title" will reflect what form elements are required
  
  // title
  const getTitle = () => title;

  // description
  const getDescription = () => description;
  const editDescription = (newDescription) => {
    description = newDescription;
  };
  // will this actually update the description property?

  // dueDate (helps sort priority)
  const getDueDate = () => dueDate;
  const editDueDate = (newDate) => {
    dueDate = newDate;
  }

  // notes
  const getNotes = () => notes; 

  // completion status (for checklist)

  // priority/favourite tasks


  return {};
};



export default toDoFactory;
