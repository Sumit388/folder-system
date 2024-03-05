/* //* Packages Import */
import { useContext } from "react";

/* //* Utils Import */
import { AppContext } from "src/app/page";

/* //* Styles Import */
import Styles from "@Styles/ActionSection.module.scss";

const ActionSections = () => {
  const state = useContext(AppContext);

  const handleGoBack = () => {
    state?.setCurrentFolder(
      (currentFolder) => currentFolder.parent || currentFolder
    );
  };

  const handleSortBy = () => {
    state?.setSortBy((sortBy) => (sortBy === "name" ? "modified" : "name"));
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
