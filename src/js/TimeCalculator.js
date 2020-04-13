import React, { Component } from 'react';
import Slider from 'rc-slider';
import Popover from './Popover';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuestionCircle
} from "@fortawesome/free-regular-svg-icons";
import 'rc-slider/assets/index.css';

const classHours = {
    0: '5',
    10: '6',
    20: '7',
    30: '8',
    40: '9',
    50: '10',
    60: '11',
    70: '12',
    80: '13',
    90: '14',
    100: '15'
  };

  const workHours = {
    0: '0',
    10: '4',
    20: '8',
    30: '12',
    40: '16',
    50: '20',
    60: '24',
    70: '28',
    80: '32',
    90: '36',
    100: '40'
  };

const sleepHours = {
    0: '5',
    20: '6',
    40: '7',
    60: '8',
    80: '9',
    100: '10'
  };

  const eatHours = {
    0: '1',
    33: '2',
    66: '3',
    100: '4'
  };

  const commuteHours = {
    0: '0',
    25: '1',
    50: '2',
    75: '3',
    100: '4'
  };

class TimeCalculator extends Component {
    constructor(props){
        super(props)
        this.state = { 
            classHours: 280,
            sleepHours: 560, 
            studyHours: 210, 
            workHours: 120,
            eatHours: 140,
            commuteHours: 70, 
            prepTime: 70,
            selfTime: 70
        }
    }
    render() { 
        const totalHours = (this.state.classHours 
            + this.state.sleepHours 
            + this.state.studyHours 
            + this.state.workHours 
            + this.state.eatHours
            + this.state.commuteHours
            + this.state.prepTime
            + this.state.selfTime)/10;
        return ( 
            <div className="card">
                <div className="card-body">
                <h5 id="totalHours" className="cardTitle">Weekly Hours Left: {168- totalHours}</h5>
                    <p className="card-text">Use this calculator to organize your time!</p>
                    <div id="classHourDiv">
                        <h6>Hours in class per week:
                        <FontAwesomeIcon id="classHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="classHours" 
                                        title="Hours In Class" 
                                        body="How many hours in class will you spend per week?"
                                    />  
                        </h6>
                        <Slider marks={classHours} step={10} defaultValue={80} name="classHours" onChange={this.handleClassChange}/>

                    </div>
                    <br/>
                    <div id="studyHourDiv">
                        <h6>Hours studying per day:
                        <FontAwesomeIcon id="classHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="classHours" 
                                        title="Hours In Class" 
                                        body="A general rule is that you should spend 2 hours studying, reading, 
                                        writing and working on projects outside of each hour spent in class. 
                                        That would mean 6 hours of time outside of class for the typical 3 credit class."
                                    />  
                        </h6>
                        <Slider marks={classHours} step={10} defaultValue={40} name="studyHours" onChange={this.handleStudyChange}/>
                    </div>
                    <br/>
                    <div id="sleepHourDiv">
                        <h6>Hours sleeping per day:
                        <FontAwesomeIcon id="sleepHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="sleepHours" 
                                        title="Hours Sleeping" 
                                        body="How many hours sleeping will you spend per day?"
                                    />  
                        </h6>
                        <Slider marks={sleepHours} step={20} defaultValue={60} name="sleepHours" onChange={this.handleSleepChange}/>
                    </div>
                    <br/>
                    <div id="workHourDiv">
                        <h6>Hours working per week:
                        <FontAwesomeIcon id="workHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="workHours" 
                                        title="Hours Working" 
                                        body="How many hours working will you spend per week?"
                                    />  
                        </h6>
                        <Slider marks={workHours} step={10} defaultValue={30} name="workHours" onChange={this.handleWorkChange}/>
                    </div>
                    <br/>
                    <div id="eatHourDiv">
                        <h6>Hours eating per day:
                        <FontAwesomeIcon id="eatHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="eatHours" 
                                        title="Hours Eating" 
                                        body="How many hours eating/making food will you spend per day?"
                                    />  
                        </h6>
                        <Slider marks={eatHours} step={33} defaultValue={33} name="eatHours" onChange={this.handleEatChange}/>
                    </div>
                    <br/>
                    <div id="commuteHourDiv">
                        <h6>Hours commuting per day:
                        <FontAwesomeIcon id="commuteHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="commuteHours" 
                                        title="Hours Commuting" 
                                        body="How many hours commuting will you spend per day?"
                                    />  
                        </h6>
                        <Slider marks={commuteHours} step={25} defaultValue={25} name="commuteHours" onChange={this.handleCommuteChange}/>
                    </div>
                    <br/>
                    <div id="prepHourDiv">
                        <h6>Hours getting ready per day:
                        <FontAwesomeIcon id="prepHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="prepHours" 
                                        title="Hours Getting Ready" 
                                        body="How many hours getting ready will you spend per day?"
                                    />  
                        </h6>
                        <Slider marks={eatHours} step={33} defaultValue={0} name="prepHours" onChange={this.handlePrepChange}/>
                    </div>
                    <br/>
                    <div id="selfHourDiv">
                        <h6>Hours for self care per day:
                        <FontAwesomeIcon id="selfHours" className="ml-2" icon={faQuestionCircle} size="1x" />
                        <Popover 
                                        id="selfHours" 
                                        title="Hours For Self Care" 
                                        body="How many hours of self care will you need per day?"
                                    />  
                        </h6>
                        <Slider marks={eatHours} step={33} defaultValue={0} name="selfHours" onChange={this.handleSelfChange}/>
                    </div>
                    <br/>

                </div> 
            </div>
         );
    }

    handleClassChange = (value) => {
        this.setState({
            classHours: value
        })
    }

    handleStudyChange = (value) => {
        this.setState({
            studyHours: value*5
        })
    }

    handleSleepChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 50; break;
            case 20: retVal = 60; break;
            case 40: retVal = 70; break;
            case 60: retVal = 80; break;
            case 80: retVal = 90; break;
            case 100: retVal = 100; break;
            default: break;
        }
        this.setState({
            sleepHours: retVal*7
        })
    }

    handleWorkChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 0; break;
            case 10: retVal = 40; break;
            case 20: retVal = 80; break;
            case 30: retVal = 120; break;
            case 40: retVal = 160; break;
            case 50: retVal = 200; break;
            case 60: retVal = 240; break;
            case 70: retVal = 280; break;
            case 80: retVal = 320; break;
            case 90: retVal = 360; break;
            case 100: retVal = 400; break;
            default: break;

        }
        this.setState({
            workHours: retVal
        })
    }

    handleEatChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 10; break;
            case 33: retVal = 20; break;
            case 66: retVal = 30; break;
            case 100: retVal = 40; break;
            default: break;

        }
        this.setState({
            eatHours: retVal*7
        })
    }

    handleCommuteChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 0; break;
            case 25: retVal = 10; break;
            case 50: retVal = 20; break;
            case 75: retVal = 30; break;
            case 100: retVal = 40; break;
            default: break;

        }
        this.setState({
            commuteHours: retVal*5
        })
    }
    handlePrepChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 10; break;
            case 33: retVal = 20; break;
            case 66: retVal = 30; break;
            case 100: retVal = 40; break;
            default: break;

        }
        this.setState({
            prepTime: retVal*7
        })
    }
    handleSelfChange = (value) => {
        var retVal = 0;
        switch (value)
        {
            case 0: retVal = 10; break;
            case 33: retVal = 20; break;
            case 66: retVal = 30; break;
            case 100: retVal = 40; break;
            default: break;

        }
        this.setState({
            selfTime: retVal*7
        })
    }

}
 
export default TimeCalculator;