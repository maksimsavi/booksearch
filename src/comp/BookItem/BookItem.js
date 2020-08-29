import React from 'react'
import '../BookItem/BookItem.css'

class BookItem extends React.Component {
render(){
    const volume = this.props.volume;
    
    return (
        <li className="bookItem">
            <div><img src={volume.img} alt={volume.title}/></div>
            <div>
                <h2>{volume.title}</h2>
                <p>{volume.author===undefined?'':volume.author[0]}</p>
                <p><b>{volume.price}</b></p>
                <p>{volume.description}</p>
                
            </div>
        </li>
    )
}
}

export default BookItem