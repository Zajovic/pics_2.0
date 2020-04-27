import React from 'react';

class SearchBar extends React.Component {

    state = { input: "" }

    onSearchSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.input);
    }

    render() {

        return (
            <div className="ui segment" style={{width: '50%', margin: '50px auto'}}>
                <h3 style={{textAlign: 'center', fontWeight:'500'}}>Enter a term for the appropriate photo list and submit it!</h3>
                <form className="ui form" onSubmit={this.onSearchSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={(e) => {this.setState({input: e.target.value})}} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;