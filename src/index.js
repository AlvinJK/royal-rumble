import {
  getAllInputFiles,
  getInputContents,
  getSortedList,
  writeFileContents
} from "./royalRumble";

const inputFiles = getAllInputFiles();
inputFiles.map(fileName => {
  const royalNames = getInputContents(fileName);
  const sortedName = getSortedList(royalNames);
  writeFileContents(fileName.replace("input", "output"), sortedName.join("\n"));
});
