/* //* Packages Import */
import { useEffect, useState, useContext } from "react";

/* //* Utils Import */
import { AppContext } from "src/app/page";
import { getLocalStorage } from "@Utils/utils";

/* //* Styles Import */
import Styles from "@Styles/ActivityLog.module.scss";

const ActivityLog = () => {
  const state = useContext(AppContext);
  const [log, setLog] = useState<Array<String>>([]);

  useEffect(() => {
    setLog(getLocalStorage("log"));
  }, [state]);

  return (
    <div className={Styles.activityLog}>
      <h2>User Activity Log</h2>
      {log?.map((entry) => (
        <div key={`${entry}`}>{entry}</div>
      ))}
    </div>
  );
};

export default ActivityLog;
