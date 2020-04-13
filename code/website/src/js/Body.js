import React, { Component } from 'react';
import CostCalculator from './CostCalculator';
import TimeCalculator from './TimeCalculator';
import Summary from './Summary';


class Body extends Component {
    state = {  }
    render() { 
        return (
        <div className="container pt-4 pb-4">
            <div className="row">
                <div className="col-6">
                    <CostCalculator />
                </div>
                <div className="col-6">
                    <TimeCalculator />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Summary />
                </div>

            </div>
        </div>
         );
    }
}
 
export default Body;