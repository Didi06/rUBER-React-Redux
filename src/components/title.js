import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);

    }
    render() { 
        return ( 
            <div className="container">
                <h1> { this.props.header } </h1>
            </div>
         )
    }
}
 
export default Title;