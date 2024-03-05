"use client";
/* //* Packages Import */
import { useState, createContext, useEffect } from "react";

/* //* Components Import */
import FolderComponent from "@Components/FolderComponent";
import BreadCrumb from "@Components/BreadCrumb";

/* //* Data Import */
import { fileStructure, addParentPointers } from "@Data/data";

/* //* Styles Import */
import Styles from "@Styles/Homepage.module.scss";

export const AppContext = createContext<{
  currentFolder: FileNode;
  setCurrentFolder: React.Dispatch<React.SetStateAction<FileNode>>;
} | null>(null);

export default function Home() {
  const [currentFolder, setCurrentFolder] = useState<FileNode>(fileStructure);

  // const handleSort = () => {
  //   const tempValue=    currentPosition.sort( (firstFolder: any, secondFolder: any) =>
  //   parseInt(firstFolder.name) - parseInt(secondFolder.name));
  //   console.log(tempValue);

  //   setcurrentPostion((currentPosition: FileNode) =>
  //     currentPosition.sort(
  //       (firstFolder: any, secondFolder: any) =>
  //         parseInt(firstFolder.name) - parseInt(secondFolder.name)
  //     )
  //   );
  // };

  const appStates = { currentFolder, setCurrentFolder };

  const handleGoBack = () => {
    setCurrentFolder((currentFolder) => currentFolder.parent || currentFolder);
  };

  useEffect(() => {
    fileStructure.child.forEach((childNode) => {
      addParentPointers(childNode, fileStructure);
    });
    setCurrentFolder(fileStructure);
  }, []);

  return (
    <AppContext.Provider value={appStates}>
      <main>
        <div className={Styles.mainContainer}>
          <BreadCrumb />
          <button className={Styles.goBack} onClick={handleGoBack}>
            {" "}
            Go back
          </button>
          <FolderComponent />
        </div>
      </main>
    </AppContext.Provider>
  );
}
