import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'

import {IoIosArrowBack} from 'react-icons/io'

import Header from '../Header'

import TabItem from '../TabItem'

import ResourcesTab from '../ResourcesTab'

import RequestsTab from '../RequestsTab'

import UsersTab from '../UsersTab'

import CreateItemPage from '../CreateItemPage'


import './index.css'

const tabsList = [
    {tabId: 'RESOURCES', displayText: 'Resources'},
    {tabId: 'REQUESTS', displayText: 'Requests'},
    {tabId: 'USERS', displayText: 'Users'}
  ]
  

class HomePage extends Component {

    state = {tabIdValue : tabsList[0].tabId,searchValue : "",isButtonShown : false, newResourceItem: {},isCreateButtonShown: false}

    buttonAddItem = value => {
        this.setState({isButtonShown : value})
    }

    tabFunction = tabId => {
        this.setState({tabIdValue: tabId})
    }

    searchButton = event => {
        this.setState({searchValue : event.target.value})
    }

    allTabsMethod = () => {
        const {tabIdValue,searchValue,newResourceItem,isCreateButtonShown} = this.state 
        //console.log(tabIdValue)
        const createItem = isCreateButtonShown ? newResourceItem : ""
        switch(tabIdValue) {
            case tabsList[0].tabId :
                return <ResourcesTab searchValue={searchValue} newResourceItem={createItem} />
            case tabsList[1].tabId :
                return <RequestsTab searchValue={searchValue}  />
            case tabsList[2].tabId :
                return <UsersTab searchValue={searchValue}  />
            default :
                return null
        }
    } 

    userButton = () => {
        this.setState({isButtonShown: false})
        this.setState({tabIdValue: "USERS"})
        //console.log("clicked back")
    }

    addNewResourceButton = (obj,val) => {
        console.log(obj,val)
        this.setState({newResourceItem : obj})
        this.setState({isCreateButtonShown : val})
    }

    logoutButtonMethod = val => {
        const {isShownHomeMethod} = this.props
        isShownHomeMethod(val)
        console.log(val)
    }

    render() {
        const {tabIdValue,isButtonShown} = this.state
        
        if (isButtonShown === false) {
            return (
                <div className='home-container'>
                    <Header buttonAddItem={this.buttonAddItem} isButtonShown={isButtonShown} logoutButtonMethod={this.logoutButtonMethod}  />
                    <ul className='home-list-container'>
                        {tabsList.map(eachTab => (
                            <TabItem key={eachTab.tabId} item={eachTab} tabFunction={this.tabFunction} tabIdValue={tabIdValue}/>
                        ))}
                    </ul>
                    <div className='home-card-1'>
                        <div className='search-container'>
                            <div className='icon-container'>
                               <BsSearch />
                            </div>
                            <input type="search" className='search-bar' placeholder='Search' onChange={this.searchButton} />
                        </div>
                    </div>
                    {this.allTabsMethod()}  
                </div>
            )
        }
        return (
            <div className='add-item-cont'>
                <Header />
                <div>
                    <div className='back-container' onClick={this.userButton}>
                        <IoIosArrowBack />
                        <p className='user-back'>Users</p>
                    </div>
                    <CreateItemPage addNewResourceButton={this.addNewResourceButton} />
                </div>
            </div>
        )
        
    }
}

export default HomePage