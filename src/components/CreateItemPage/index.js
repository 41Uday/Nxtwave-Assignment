import { Component } from "react";

import { toast, ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

import './index.css'

class CreateItemPage extends Component {

    state = {itemName : "",linkValue :"", descriptionValue : "", resourceName : ""}

    itemChange = event => {
        this.setState({itemName : event.target.value})
        //console.log(event.target.value)
    }

    linkChange = event => {
        this.setState({linkValue: event.target.value})
        //console.log(event.target.value)
    }

    resourceNameChange = event => {
        this.setState({resourceName: event.target.value})
        //console.log(event.target.value)
    }

    descriptionChange = event => {
        this.setState({descriptionValue: event.target.value})
        //console.log(event.target.value)
    }

    itemNameInputMethod = () => (
        <>
            <label htmlFor="item" className="item-label">ITEM NAME</label>
            <br />
            <input type="text" className="item-input" id="item" onChange={this.itemChange} placeholder="Please Enter a item name" />
            <br />
        </>
    )

    linkInputMethod = () => (
        <>
            <label htmlFor="link" className="item-label">LINK</label>
            <br />
            <input type="text" className="item-input link" id="link" onChange={this.linkChange} placeholder="Please Enter a item link" />
            <br />
        </>
    )

    resourceNameInputMethod = () => (
        <>
            <label htmlFor="resource" className="item-label">RESOURCE NAME</label>
            <br />
            <input type="text" className="item-input" id="resource" onChange={this.resourceNameChange} placeholder="Please Enter a resource name" />
            <br />
        </>
    )

    descriptionInputMethod = () => (
        <>
            <label htmlFor="description" className="item-label">DESCRIPTION</label>
            <br />
            <input type="text" className="description-input" id="description" onChange={this.descriptionChange} placeholder="Please add a description" />
            <br />
        </>
    )

    createButton = async event => {
        event.preventDefault()
        //const {addNewResourceButton} = this.props
        const {itemName,linkValue,resourceName,descriptionValue} = this.state
        const resopnse = await fetch("https://media-content.ccbp.in/website/react-assignment/add_resource.json")
        const responseStatus = resopnse.ok
        const conditionOne = itemName.length !== 0 
        const conditionTwo1 = linkValue.startsWith("www")
        const conditionTwo2 = linkValue.endsWith("com")
        const conditionThree = resourceName.length !== 2 
        const conditionFour = descriptionValue.length !== 10
        if (conditionOne && conditionTwo1 && conditionTwo2 && conditionFour && conditionThree && responseStatus) {
            toast.success('Successfully Added', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                //addNewResourceButton({itemName,linkValue,resourceName,descriptionValue},true)
                this.setState({itemName : ""},this.itemNameInputMethod)
                this.setState({linkValue : ""})
        } else {
            toast.error('You Entered Unvalid Information', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }

    toastMethod = () => (
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    )

    render() {
        return (
            <div className="create-item-page-container">
                <form className="careate-item-page-card-1" onSubmit={this.createButton}>
                        <h1 className="create-item-head">Item Details</h1>
                        <div className="careate-item-page-inner-card-1">
                            {this.itemNameInputMethod()}
                            {this.linkInputMethod()}
                            {this.resourceNameInputMethod()}
                            {this.descriptionInputMethod()}
                            <div className="create-button-container">
                                <button type="submit" className="create-button">CREATE</button>
                            </div>
                            {this.toastMethod()}
                        </div>
                </form>
                <img src="https://res.cloudinary.com/ddxkcazf7/image/upload/v1668248301/image_9_n3_osgbis.png" alt="item-page-img" className="item-page-img" />
            </div>
        )
    }
}

export default CreateItemPage