import styles from "./App.module.scss";
import FileTree from "./FileTree";
function App() {
  return (
    <div className={styles.root}>
      <FileTree />
      <div
        className={styles.separator}
        onDrag={(a) => {
          console.log(a);
        }}
        // onPointerMove={(a) => {
        //   console.log(a);
        // }}
      ></div>
      <div className={styles.editor}>editor</div>
    </div>
  );
}
export default App;
