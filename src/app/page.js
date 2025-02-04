import Image from "next/image";
import styles from "./page.module.css";
import Title from "../components/title/index.js";
import Input from "../components/input/index.js";


// Title 
// Input 
// Tabs -> Tab
// TaskList -> Task -> Button
// Footer 
export default function Home() {
  return (
    <div className={styles.page}>
      <Title />
      <Input />
    </div>
  );
}