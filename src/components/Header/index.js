import './index.css'

const Header = ({buttonAddItem,isButtonShown,logoutButtonMethod}) => {
    const addItemButton = () => {
        buttonAddItem(true)
    }

    const logoutButton = () => {
        logoutButtonMethod(false)
        console.log("clicked")
    }

    return (
        <>
        <div className='header-container'>
            <img src="https://nxtwave.imgix.net//logos/Nxtwave_90_90.png?q=80&auto=format%2C+compress" alt="logo" className='header-img' />
            <div className='header-card-1'>
                {isButtonShown === false ? (<button type="button" className='header-button' onClick={addItemButton}>ADD ITEM</button>) : null}
                <img src="https://res.cloudinary.com/ddxkcazf7/image/upload/v1668155617/image_n1_om3czt.png" alt="userProfile" className='header-img-2' />
                <button type="button" className='logout-button cdb' onClick={logoutButton}>Logout</button>
            </div>
        </div>
        <hr />
    </>
    )  
}

export default Header