import createToDo from "../js/createToDo";

const tempTitle = "tempTitle";
const tempDesc = "tempDesc";
const tempDueDate = "tempDueDate";
const tempNotes = "tempNotes";

test("update toDo property", () => {
  let toDo = createToDo(tempTitle, tempDesc, tempDueDate, tempNotes);

  expect(toDo.title).toBe(tempTitle);
  toDo.title = "yup";
  expect(toDo.title).toBe("yup");
});
