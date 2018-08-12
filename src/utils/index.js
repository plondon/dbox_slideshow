export const getFolders = filesListFolderResponse =>
  filesListFolderResponse.entries.filter(entry => entry[".tag"] === "folder");

export const getFiles = filesListFolderResponse =>
  filesListFolderResponse.entries.filter(entry => entry[".tag"] === "file");
