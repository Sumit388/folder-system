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

export const getLocalStorage = (key: string) =>
  JSON.parse(window?.localStorage.getItem(key) as string);

export const setLocalStorage = (key: string, value: string) => {
  const previousValue =
    JSON.parse(window?.localStorage.getItem(key) as string) || [];
  previousValue.push(value);
  window?.localStorage.setItem(key, JSON.stringify(previousValue));
};

export const formattedDate = (date: Date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);

  return `${hours}:${minutes}:${seconds}, ${day}/${month}/${year}`;
};
