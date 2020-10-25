import React from 'react';

export default class Search extends React.Component {
    constructor(props){
            super(props);
    }

    onChangeEvent = e => {
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(query);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChangeEvent}></input>
            </div>
        );
    }
}

