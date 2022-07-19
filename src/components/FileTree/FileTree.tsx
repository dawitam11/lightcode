import { useState } from "react";
import styles from "./FileTree.module.scss";
const FileTree = (): JSX.Element => {
  const [width, setWidth] = useState(300);
  return (
    <div className={styles.fileTreeWrapper} style={{ width }}>
      <div className={styles.fileTree}>File Tree</div>
      <Resizer setWidth={setWidth} />
    </div>
  );
};

type ResizerProps = {
  setWidth: (width: number) => void;
};

const Resizer = ({ setWidth }: ResizerProps) => {
  const handleDrag = (e: React.DragEvent<HTMLInputElement>) => {
    if (e.clientX > 300) setWidth(e.clientX);
  };
  return <div className={styles.resizer} onDrag={handleDrag}></div>;
};
export default FileTree;
