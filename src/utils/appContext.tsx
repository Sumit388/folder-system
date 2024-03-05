import { createContext } from "react";

export const AppContext = createContext<{
  currentFolder: FileNode;
  setCurrentFolder: React.Dispatch<React.SetStateAction<FileNode>>;
  sortBy: "name" | "modified";
  setSortBy: React.Dispatch<React.SetStateAction<"name" | "modified">>;
} | null>(null);
