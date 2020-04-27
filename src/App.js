import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImgList from './ImgList';

class App extends React.Component {

    state = { images: [] }


    onFormSubmit = async (input) => {
        try {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: input },
                headers: {
                    Authorization: 'Client-ID o_DiC0uU9ZH8CBY9OxECuhhyAh6Oldc7KfgEflFJRbY'
                }
            });
            this.setState({ images: response.data.results });
        } catch (err) {
            if (err.response.status) {
                alert(`An error has occurred (HTTP request status code: ${err.response.status})`);
            }
        }

    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onFormSubmit} />
                <ImgList images={this.state.images} />
            </div>
        )
    }
}
export default App;