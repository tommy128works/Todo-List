import createProject from "../js/createProject";

const tempTitle = "tempTitle";
const tempDesc = "tempDesc";
const tempDueDate = "tempDueDate";
const tempNotes = "tempNotes";

test("project initial array property", () => {

  let project = createProject(tempTitle);
  expect(project.toDos).toEqual(["hi"]);
});
