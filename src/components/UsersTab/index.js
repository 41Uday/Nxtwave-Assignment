import {useEffect,useState} from 'react'

import Loader from 'react-loader-spinner'

import axios from 'axios'

import ResourcesItem from '../ResourcesItem'

import Pagination from '../Pagination'

import './index.css'


const UsersTab = (props) => {
    const {searchValue} = props
    const [data,setData] = useState([]);
    const [perpage,setPerpage] = useState([])
    const [paginationValue, setPaginationValue] = useState(1);
    useEffect(() => {
        axios.get("https://media-content.ccbp.in/website/react-assignment/resources.json").then(
            res => {setData(res.data.filter(each => each.tag === "user"));setPerpage(res.data.slice(0,6))}
        )
    },[])
    
    
    const pageHandler = (pageNumber) => {
        setPerpage(data.slice((pageNumber*6)-6,pageNumber*6))
        setPaginationValue(pageNumber)
    }

    //console.log(perpage)
    
    const filteredResults = perpage.filter(each => each.title.toLowerCase().includes(searchValue.toLowerCase()))
    const searchRender = filteredResults.length !== 0
    return (
        <div>
            {data.length >= 1 ? (
                    <div>
                        {searchRender ? (
                            <>
                            <ul className='resources-list-container'>
                                {filteredResults.map(each => (
                                    <ResourcesItem key={each.id} card={each}  />
                                ))}
                            </ul>
                            <br />
                        </>
                        ) : (
                            <div className='search-keyword-container'>
                                <h1>Please type other Search keyword</h1>
                            </div>
                        )}
                        <Pagination data={data} pageHandler={pageHandler} paginationValue={paginationValue} />
                    </div>
            ) : 
            ( <div className='loader-container'>
                <Loader type="TailSpin" color="blue" height="50" width="50" />
              </div>)}
        </div>
    )
}

export default UsersTab