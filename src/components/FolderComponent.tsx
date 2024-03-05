/* //* Packages Import */
import { useContext } from "react";
import Image from "next/image";

/* //* Utils Import */
import { AppContext } from "src/app/page";
import { sortByNameOrDate } from "@Utils/utils";

/* //* Assets Import */
import file from "@Assets/file.svg";
import folder from "@Assets/folder.svg";

/* //* Styles Import */
import Styles from "@Styles/FolderComponent.module.scss";

const FolderComponent = () => {
  const state = useContext(AppContext);

  const handleFolderClick = (folder: FileNode) => {
    if (folder?.type === "file") window.open(folder?.link, "_blank");
    else
      state?.setCurrentFolder({
        ...folder,
        child: sortByNameOrDate(state?.sortBy, folder.child),
      });
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
          <span>
            <Image
              src={currentFolder.type === "file" ? file : folder}
              alt="entry icon"
              width={20}
            />{" "}
          </span>
          <span>{currentFolder.name}</span>
          <span className={Styles.timeStamp}>{currentFolder.createdAt}</span>
        </div>
      ))}
    </div>
  );
};

export default FolderComponent;
