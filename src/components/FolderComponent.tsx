/* //* Packages Import */
import { useContext } from "react";

/* //* Utils Import */
import { AppContext } from "src/app/page";

/* //* Styles Import */
import Styles from "@Styles/FolderComponent.module.scss";

const FolderComponent = () => {
  const state = useContext(AppContext);
  const handleFolderClick = (folder: any) => {
    state?.setCurrentFolder(folder);
  };
  return (
    <div className={Styles.folderContainer}>
      {" "}
      {state?.currentFolder?.child?.map((currentFolder: FileNode) => (
        <div
          className={Styles.mainStructureContainer}
          onClick={() => handleFolderClick(currentFolder)}
          key={currentFolder.key}
        >
          <div
            className={
              currentFolder.type === "file" ? Styles.file : Styles.folder
            }
          >
            {currentFolder.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FolderComponent;
