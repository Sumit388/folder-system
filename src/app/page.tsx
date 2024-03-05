"use client";
/* //* Packages Import */
import { useState, createContext, useEffect } from "react";

/* //* Components Import */
import FolderComponent from "@Components/FolderComponent";
import BreadCrumb from "@Components/BreadCrumb";
import ActionSections from "@Components/ActionSections";

/* //* Utils Import */
import { sortByNameOrDate } from "@Utils/utils";

/* //* Data Import */
import { fileStructure, addParentPointers } from "@Data/data";

/* //* Styles Import */
import Styles from "@Styles/Homepage.module.scss";

export const AppContext = createContext<{
  currentFolder: FileNode;
  setCurrentFolder: React.Dispatch<React.SetStateAction<FileNode>>;
  sortBy: "name" | "modified";
  setSortBy: React.Dispatch<React.SetStateAction<"name" | "modified">>;
} | null>(null);

export default function Home() {
  const [currentFolder, setCurrentFolder] = useState<FileNode>(fileStructure);
  const [sortBy, setSortBy] = useState<"name" | "modified">("name");

  const appStates = { currentFolder, setCurrentFolder, sortBy, setSortBy };

  useEffect(() => {
    fileStructure.child.forEach((childNode) => {
      addParentPointers(childNode, fileStructure);
    });
    setCurrentFolder(fileStructure);
  }, []);

  useEffect(() => {
    setCurrentFolder((currentFolder) => {
      return {
        ...currentFolder,
        child: sortByNameOrDate(sortBy, currentFolder.child),
      };
    });
  }, [sortBy]);

  return (
    <AppContext.Provider value={appStates}>
      <main>
        <div className={Styles.mainContainer}>
          <BreadCrumb />
          <ActionSections />
          <div className={Styles.description}>
            Files & Folders sorted by:{" "}
            {sortBy === "name" ? "File name" : "File date"}
          </div>
          <FolderComponent />
        </div>
      </main>
    </AppContext.Provider>
  );
}
