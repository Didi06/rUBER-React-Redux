import React from 'react';
import Title from './title';
import { connect} from 'react-redux';
import { addRide} from '../redux/actions/index';

class BookIt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: "",
            lastName: "",
            pickUp: "",
            dropOff: ""
         }
    }


    onSubmit() {
       this.props.addRide(this.state);

        // Clears input fields
        this.setState({
            firstName: "",
            lastName: "",
            pickUp: "",
            dropOff: ""
        })

    }

    render() { 
        return (
            <div>
                <Title header="Book a Ride" />

              <div className="form-group">
              <label className="ptag"> <p>First Name</p></label>
               
                <input type="text" className="form-control" value={ this.state.firstName} onChange = {(event) => { this.setState({firstName: event.target.value})}} />
              </div>

              <div className="form-group">
                <p>Last Name</p>
                <input type="text" className="form-control" value={ this.state.lastName} onChange = {(event) => { this.setState({lastName: event.target.value})}}/>
              </div>

              <div className="form-group">
                <p>Pick Up</p>
                <input type="text" className="form-control" value={ this.state.pickUp} onChange = {(event) => { this.setState({pickUp: event.target.value})}}/>
              </div>

              <div className="form-group">
                <p>Drop Off</p>
                <input type="text" className="form-control" value={ this.state.dropOff} onChange = {(event) => { this.setState({dropOff: event.target.value})}}/>
              </div>

                <button className="btn btn-primary float-right" onClick={this.onSubmit.bind(this)}> Book It! </button>  

            </div>
          )
    }
}

const mapDispatchToProps = dispatch => ({
        addRide: (ride) => dispatch(addRide(ride))
    })

 
export default connect(null, mapDispatchToProps)(BookIt);