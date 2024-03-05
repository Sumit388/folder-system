/* //* Packages Import */
import { useEffect, useContext, useState } from "react";
import Image from "next/image";

/* //* Utils Import */
import { AppContext } from "src/app/page";
import { sortByNameOrDate } from "@Utils/utils";

/* //* Assets Import */
import chevron from "@Assets/chevron.svg";

/* //* Styles Import */
import Styles from "@Styles/BreadCrumb.module.scss";

const BreadCrumb = () => {
  const state = useContext(AppContext);
  const [crumbList, setCrumbList] = useState<FileNode[]>([]);

  const handleBreadCrumbClick = (folder: FileNode) => {
    state?.setCurrentFolder({
      ...folder,
      child: sortByNameOrDate(state?.sortBy, folder.child),
    });
  };

  useEffect(() => {
    const temporaryList = [];
    let currentFolder: FileNode | undefined | null = state?.currentFolder;
    while (currentFolder) {
      temporaryList.push(currentFolder);
      currentFolder = currentFolder?.parent;
    }
    setCrumbList(temporaryList.reverse());
  }, [state]);

  return (
    <div className={Styles.breadCrumbContainer}>
      {crumbList.map((item: FileNode, index: number) => (
        <div
          key={item?.key}
          className={Styles.breadCrumb}
          onClick={() => handleBreadCrumbClick(item)}
        >
          <span>{item?.name}</span>
          {index !== crumbList.length - 1 && (
            <Image src={chevron} alt="entry icon" width={10} />
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
