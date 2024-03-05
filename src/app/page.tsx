"use client";
/* //* Packages Import */
import { useState, useEffect } from "react";

/* //* Components Import */
import FolderComponent from "@Components/FolderComponent";
import BreadCrumb from "@Components/BreadCrumb";
import ActionSections from "@Components/ActionSections";
import ActivityLog from "@Components/ActivityLog";

/* //* Utils Import */
import { sortByNameOrDate } from "@Utils/utils";
import { AppContext } from "@Utils/appContext";

/* //* Data Import */
import { fileStructure, addParentPointers } from "@Data/data";

/* //* Styles Import */
import Styles from "@Styles/Homepage.module.scss";

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
          <h1>File Structure Demo</h1>
          <BreadCrumb />
          <ActionSections />
          <div className={Styles.description}>
            Files & Folders sorted by:{" "}
            {sortBy === "name" ? "File Name" : "File Date"}
          </div>
          <FolderComponent />
          <ActivityLog />
        </div>
      </main>
    </AppContext.Provider>
  );
}
