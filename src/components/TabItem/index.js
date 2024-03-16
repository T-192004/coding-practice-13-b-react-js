// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabItem
  const activeClassbtn = isActive ? 'active-btn' : ''
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }
  return (
    <li>
      <button
        className={`tab-item-btn ${activeClassbtn}`}
        onClick={onClickTabItem}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
