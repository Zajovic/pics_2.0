import React from 'react';

class ImageCard extends React.Component {
    render() {
        //    console.log(this.props);
        return (
            <div key={this.props.image.id}>
                <img src={this.props.image.urls.small} alt={this.props.image.description} />
            </div>
        )
    }
}
export default ImageCard;