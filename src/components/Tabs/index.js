const Tab = (props) => {
  const TABS = ["All", "Active", "Completed"];

  return (
    <div>
        {TABS.map(tab =>{
            return (
                <div>{tab}</div>
            )
        })}
    </div>
  )
}

export default Tab
