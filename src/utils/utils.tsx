export const sortByNameOrDate = (
  sortBy: "name" | "modified",
  folderChilds: FileNode[]
) => {
  if (sortBy === "name") {
    folderChilds?.sort((a: FileNode, b: FileNode) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "case" })
    );
  } else {
    folderChilds?.sort((a: FileNode, b: FileNode) => {
      const datePartsA = a.createdAt
        .split("/")
        .reverse()
        .map((part) => parseInt(part));
      const datePartsB = b.createdAt
        .split("/")
        .reverse()
        .map((part) => parseInt(part));
      const dateA = new Date(datePartsA[0], datePartsA[1] - 1, datePartsA[2]);
      const dateB = new Date(datePartsB[0], datePartsB[1] - 1, datePartsB[2]);
      return dateA.getTime() - dateB.getTime();
    });
  }
  return folderChilds;
};
