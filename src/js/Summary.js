import React, { Component } from 'react';

class Summary extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    
    render() { 


        return ( 
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Summary</h5>
                    <div className="font-weight-bold">Semesters to Graduate: </div>
                    <div className="font-weight-bold">Total Cost:</div>
                    <div className="font-weight-bold">Need funding for: </div>

                    <div className="font-weight-bold">Free Time in a Week: </div>


                </div>
            </div>
         );
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
}
 
export default Summary;