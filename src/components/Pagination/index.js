import './index.css'

const Pagination = (props) => {
    const {data,pageHandler,paginationValue} = props
    let pageNumbers = []
    for (let i = 1; i < Math.ceil(data.length/6)+1; i++) {
        pageNumbers.push(i)
    }
    //console.log(pageNumbers)
    //console.log(paginationValue)
    return (
        <div className='page-container'>
            {pageNumbers.map( page => (
                <div className={page === paginationValue ? 'page page-click' : "page"} onClick={() => pageHandler(page)} key={page}>
                    {page}
                </div>
            ))}
        </div>
    )
}

export default Pagination