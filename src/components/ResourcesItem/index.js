import './index.css'

const ResourcesItem = props => {
    const {card} = props
    const {category,description,icon_url,link,title} = card
    return (
        <li className='resource-list-item'>
            <div className='resource-item-card-1'>
                <div className='resource-list-icon-img-container '>
                    <img src={icon_url} alt="icon" className='resource-list-icon-img' />
                </div>
                <div className='resource-item-inner-card-1'>
                    <p className='resource-item-para-1'>{title}</p>
                    <p className='resource-item-para-2'>{category}</p>
                </div>
            </div>
            <a href={link}>{link}</a>
            <p className='resource-item-para-3'>{description}</p>
        </li>
    )
}

export default ResourcesItem