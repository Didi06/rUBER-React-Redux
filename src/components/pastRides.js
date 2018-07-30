import React from 'react';
import Title from './title';
import { connect } from 'react-redux';
import { removeRide } from '../redux/actions/index';

class PastRides extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div>
                <Title header="Past Rides" />
                {
                    this.props.rides.map((item, index) => {
                        return (
                            <div key={index}>
                                <p> {item.firstName} {item.lastName}</p>
                                <p> {item.pickUp} - {item.dropOff} </p>
                                <button className="btn btn-danger" onClick={() => {
                                    console.log("HERE");
                                    console.log(this.props)
                                    this.props.removeRide(index)
                                }}>X</button>
                            </div>
                        )
                    })
                }

                {this.props.rides.length > 0 && <div> Total rides this month: {this.props.rides.length} </div>}
            </div>


        )
    }
}

const mapStateToProps = state => {
    return {
        rides: state.rides
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeRide: (index) => dispatch(removeRide(index))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PastRides);