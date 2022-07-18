import styles from "./App.module.scss";
function App() {
  return (
    <div className={styles.root}>
      <div className={styles.fileTree}>file tree</div>
      <div className={styles.separator} draggable onDrag={(a) => {console.log(a);}}></div>
      <div className={styles.editor}>editor</div>
    </div>
  );
}
export default App;
