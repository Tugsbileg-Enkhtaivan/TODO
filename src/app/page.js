'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Title from "../components/title/index.js";
import Input from "../components/input/index.js";
import Tab from "@/components/Tabs";
import TaskList from "@/components/TaskList ";
import TaskContainer from "@/components/taskContainer";
import { useState } from "react";


// Title 
// Input 
// Tabs -> Tab
// TaskList -> Task -> Button
// Footer 
export default function Home() {
  const [tasks, setTasks] = useState([]);


  return (
    <div className={styles.container}>
      <Title />
      <Input tasks={tasks} setTasks={setTasks}/>
      <TaskContainer tasks={tasks}/>
    </div>
  );
}