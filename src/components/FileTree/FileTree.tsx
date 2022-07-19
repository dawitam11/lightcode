import { useState } from "react";
import styles from "./FileTree.module.scss";
const FileTree = (): JSX.Element => {
  const [width, setWidth] = useState(300);
  const handleDrag = (e: React.DragEvent<HTMLInputElement>) => {
    if(e.clientX > 300)   setWidth(e.clientX)
  };
  return (
    <div className={styles.fileTree} onDrag={handleDrag} style={{ width }}>
      {" "}
      hello{" "}
    </div>
  );
};

export default FileTree;
