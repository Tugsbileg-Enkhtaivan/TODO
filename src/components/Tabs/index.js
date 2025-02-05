import styles from "./index.module.css"

const Tab = (props) => {
  const TABS = ["All", "Active", "Completed"];

  return (
    <div className={styles.tabsContainer}>
        {TABS.map(tab =>{
            return (
                <div >
                    <button className={styles.btn}>{tab}</button>
                </div>
            )
        })}
    </div>
  )
}

export default Tab
