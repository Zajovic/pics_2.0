import React from 'react'
import './css/ImgList.css';
import ImageCard from './ImageCard';

class ImgList extends React.Component {


    render() {
        const images = this.props.images.map((image) => {
            return (
                <ImageCard key={image.id} image={image} />
            )
        });
        return (
            <div className='image-list'>{images}</div>
        )
    }
}

export default ImgList;