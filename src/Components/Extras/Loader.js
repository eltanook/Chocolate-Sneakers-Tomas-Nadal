import {Spinner} from 'react-bootstrap'


const ItemLoader = () => {
    return (
        <div id='loader'>
            <Spinner style={{margin: '.5rem'}} animation='border'/>
        </div>
    )
}

export default ItemLoader