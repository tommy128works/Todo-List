// This is the testing function provided by MDN (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#testing_for_availability)
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function checkStorageAvailability() {
  if (storageAvailable("localStorage")) {
    console.log("Web Storage API is available on this browser!");
  } else {
    alert(
      "Web Storage API is not available on this browser. Your data will not be saved."
    );
  }
}

// test if storage has been populated
// (simple if statement checking if localStorage is empty)
// if yes, retrieve all stored projects

// add project objects to storage
// argument = global array of objects
// clear > store

const updateStorage = (projectsArray) => {
  localStorage.clear();
  projectsArray.forEach((project) => {
    localStorage.setItem(project.title, JSON.stringify(project));
  });
};

// retrieve data from storage to display (part of refresh page function)
// for now, display all projects
const displayStorage = () => {
  const items = { ...localStorage };
  return items;
};

// delete everything function

// delete specific project function

// delete specific todo function

export { checkStorageAvailability, updateStorage, displayStorage };
