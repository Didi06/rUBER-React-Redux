import React from 'react';
import Title from './title';
import BookIt from './bookIt';
import PastRides from './pastRides';
import { connect} from 'react-redux';
import { addRide} from '../redux/actions/index';

class Container extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="container">

        <Title header="rUBER"/>
      
        <div className="row">
          <div className="col-md-6">
            <BookIt  />
            
          </div>
          <div className="col-md-6">
            <PastRides/>
          </div>
        </div>
          <button className="btn btn-primary" onClick={this.props.addRide}>Add Ride</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
      rides: state.rides
  }
}
const mapDispatchToProps = dispatch => ({
  addRide: (ride) => dispatch(addRide(ride))
})


export default connect (mapStateToProps, mapDispatchToProps)(Container);

