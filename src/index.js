import {
  getAllInputFiles,
  getInputContents,
  getSortedList,
  writeFileContents,
} from "./royalRumble";

const inputFiles = getAllInputFiles();
inputFiles.map((fileName) => {
  const royalNames = getInputContents(fileName);
  const sortedName = getSortedList(royalNames);
  // Using \n here still results in new line for both windows & mac
  writeFileContents(fileName.replace("input", "output"), sortedName.join("\n"));
});
