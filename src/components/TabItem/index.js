import './index.css'

const TabItem = props => {
    const {item,tabFunction,tabIdValue} = props 
    const {tabId,displayText} = item
    const tabButton = () => {
        tabFunction(tabId)
      }
    const classValue = tabId === tabIdValue ? 'tab-item-bg-color' : null
    return (
        <li>
            <button type="button" className={`tabitem-button ${classValue}`} onClick={tabButton}>{displayText}</button>
        </li>
    )
}

export default TabItem