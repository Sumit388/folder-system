/* //* Packages Import */
import { useContext } from "react";

/* //* Utils Import */
import { AppContext } from "@Utils/appContext";
import { formattedDate, setLocalStorage } from "@Utils/utils";

/* //* Styles Import */
import Styles from "@Styles/ActionSection.module.scss";

const ActionSections = () => {
  const state = useContext(AppContext);

  const handleGoBack = () => {
    setLocalStorage(
      "log",
      `${formattedDate(new Date())} : Go back from ${
        state?.currentFolder?.name
      }`
    );
    state?.setCurrentFolder(
      (currentFolder) => currentFolder.parent || currentFolder
    );
  };

  const handleSortBy = () => {
    state?.setSortBy((sortBy) => (sortBy === "name" ? "modified" : "name"));
    setLocalStorage(
      "log",
      `${formattedDate(new Date())} : Sort ${
        state?.currentFolder?.name
      } Folder with respect to ${
        state?.sortBy === "name" ? "File Date" : "File Name"
      }`
    );
  };

  return (
    <div className={Styles.actionSection}>
      <button className={Styles.goBack} onClick={handleGoBack}>
        {" "}
        Go back
      </button>
      <button className={Styles.goBack} onClick={handleSortBy}>
        {" "}
        Sort By: {state?.sortBy === "modified" ? "Name" : "Modified"}
      </button>
    </div>
  );
};

export default ActionSections;
