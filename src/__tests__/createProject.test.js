import createProject from "../js/createProject";
import createToDo from "../js/createToDo";

test("add toDo to project", () => {
  let project = createProject("project");
  let toDoOne = createToDo("toDoOne", "descriptionOne", null,"notesOne", false, 1);
  let toDoTwo = createToDo("toDoTwo", "descriptionTwo", null,"notesTwo", false, 2);
  let toDoThree = createToDo("toDoThree", "descriptionThree", null,"notesThree", false, 3);

  project.addToDo(toDoOne);
  project.addToDo(toDoTwo);
  project.addToDo(toDoThree);
  project.sortToDos();

  expect(project.getToDos()).toEqual([toDoThree, toDoTwo, toDoOne]);
});
