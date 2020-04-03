import {
  getAllInputFiles,
  getInputContents,
  getSortedList
} from "./royalRumble";

const inputFiles = getAllInputFiles();
console.log(inputFiles);
inputFiles.map(fileName => {
  const royalNames = getInputContents(fileName);
  const sortedName = getSortedList(royalNames);
  console.log(sortedName);
});
