import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuestionCircle
} from "@fortawesome/free-regular-svg-icons";
import Popover from './Popover';
import NumberFormat from 'react-number-format';
import { UncontrolledCollapse, Button, CardBody, Card, CardColumns } from 'reactstrap';


class CostCalculator extends Component {
    constructor(props){
        super(props)
        this.state = { 
            creditsNeeded: 0,
            creditsPerSemester: 0,
            tuition: 0,
            housing: 0,
            mealPlan: 0,
            bookCost: 0,
            food: 0,
            scholarships: 0,
            income: 0,
            moneyFromParents: 0,
            loans: 0,
            gas: 0,
            parking: 0,
            carInsurance: 0,
            rent: 0,
            utilities: 0,
            rentInsurance: 0,
            anticipatedSalary: 40000
        }
    }
    
    
    render() { 
        var semestersToGraduate = Math.ceil((this.state.creditsNeeded)/this.state.creditsPerSemester);
        var yearsToGraduate = Math.ceil((this.state.creditsNeeded)/(2*this.state.creditsPerSemester));
        var yearTotal = (this.state.tuition 
                            + this.state.housing 
                            + this.state.bookCost 
                            + this.state.food
                            + this.state.mealPlan
                            + this.state.gas
                            + this.state.parking
                            + this.state.carInsurance
                            + this.state.rent
                            + this.state.utilities
                            + this.state.rentInsurance);

        var yearRemainingCost = (yearTotal - this.state.scholarships
                                            - this.state.income
                                            - this.state.moneyFromParents
                                            - this.state.loans);
        
        var total = semestersToGraduate * (this.state.tuition 
                                            + this.state.housing 
                                            + this.state.bookCost 
                                            + this.state.food
                                            + this.state.gas
                                            + this.state.parking
                                            + this.state.carInsurance
                                            + this.state.rent
                                            + this.state.utilities
                                            + this.state.rentInsurance);
        
        var remainingAmount = total - (this.state.scholarships * yearsToGraduate) 
                                    - (this.state.income * yearsToGraduate)
                                    - (this.state.moneyFromParents * yearsToGraduate)
                                    - (this.state.loans * yearsToGraduate);

        return ( 
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Overview</h5>
                    <Card>
                        <CardBody>
                            <div className="font-weight-bold">Years to Graduate: <NumberFormat value={yearsToGraduate} displayType={'text'} thousandSeparator={true}/></div>
                            <div className="font-weight-bold">Total Year Cost: <NumberFormat value={yearTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} /></div>
                            <div className="font-weight-bold">Expenses left: <NumberFormat value={yearRemainingCost} displayType={'text'} thousandSeparator={true} prefix={'$'} /></div>
                        </CardBody>
                    </Card>

                    <form>

                    {/* Credits */}

                    <div>
                        <div  className="card-header font-weight-bold mt-3" id="toggler1">
                        Credits
                        </div>
                        <UncontrolledCollapse toggler="#toggler1">
                        <Card>
                            <CardBody>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Credits for Degree" name="creditsNeeded" thousandSeparator={true} onValueChange={ (values) => {const {value} = values; this.setState({creditsNeeded: value})}}/>
                                    <FontAwesomeIcon id="creditsNeeded" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="creditsNeeded" 
                                        title="Credits Needed for Degree" 
                                        body="Enter the credits you plan on taking your first semester. 
                                        Credits are the measure of time in classroom. Most courses are 3 credits or 4 if they include a lab. 
                                        12 credits is the minimum needed to be considered 'full-time' for federal financial aid. 
                                        However, Students planning on graduating in four years need to take 15 credits each semester 
                                        or 30 credits per academic year between fall, spring, summer to earn 120 credits required for most degrees. 
                                        Keep in mind that a general rule is for each credit (hour in class) you need to set aside 
                                        2 hours for study and to work on writing, assignments, projects, group work, etc. 
                                        Taking 15 credits would mean 30 hours of study time in a given week."
                                    />    
                                </div>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Credits Per Semester" name="creditsPerSemester" thousandSeparator={true} onValueChange={ (values) => {const {value} = values; this.setState({creditsPerSemester: value})}}/>
                                    <FontAwesomeIcon id="creditsPerSemester" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="creditsPerSemester" 
                                        title="Credit hours" 
                                        body="Enter the credits you plan on taking your first semester. 
                                        Credits are the measure of time in classroom. Most courses are 3 credits or 4 if they include a lab. 
                                        12 credits is the minimum needed to be considered 'full-time' for federal financial aid. 
                                        However, Students planning on graduating in four years need to take 15 credits each semester 
                                        or 30 credits per academic year between fall, spring, summer to earn 120 credits required for most degrees. 
                                        Keep in mind that a general rule is for each credit (hour in class) you need to set aside 
                                        2 hours for study and to work on writing, assignments, projects, group work, etc. 
                                        Taking 15 credits would mean 30 hours of study time in a given week."
                                    />    
                                </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>




                    {/* Core school expenses */}

                    <div>
                        <div  className="card-header font-weight-bold mt-3" id="toggler2">
                        Core school expenses
                        </div>
                        <UncontrolledCollapse toggler="#toggler2">
                        <Card>
                            <CardBody>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Tuition/Fees" name="tuition" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({tuition: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="tuition" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="tuition" 
                                        title="Tuition/Fees" 
                                        body="Enter your tuition and fees for the academic year. 
                                        Tuition and fees are often based on how many credits you are taking. 
                                        At Boise State the cost is the same for 11-16 credits. 
                                        Check the college's  website carefully to understand the cost of tuition and relative fees. 
                                        Make the most of your tuition investment, consider taking as many credits as you are able."
                                        link="https://www.boisestate.edu/vpfa-student-financial-services/boise-state-university-fees/undergraduate-tuition-fees/"
                                    />  
                                </div>

                                <div className="mt-2">
                                    <NumberFormat placeholder="Books/Supplies" name="bookCost" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({bookCost: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="bookCost" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="bookCost" 
                                        title="Books/Supplies" 
                                        body="Enter the cost of books for the year. Books vary in costs by class. 
                                        A general estimate is $1200/year based on the official cost of attendance. 
                                        Many classes list their cost in their syllabus and in the online, 
                                        you can rent some textbooks or buy used books which might reduce the cost."
                                    /> 
                                </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>



                    {/* Living on campus */}

                    <div>
                        <div  className="card-header font-weight-bold mt-3" id="toggler5">
                        Living on campus?
                        </div>
                        <UncontrolledCollapse toggler="#toggler5">
                        <Card>
                            <CardBody>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Housing Cost" name="housing" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({housing: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="housing" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="housing" 
                                        title="Housing Cost" 
                                        body="Enter the cost of on-campus housing and dining for the year. 
                                        Enter 0 if you do not plan to live on campus. Living and eating on campus 
                                        can save time that you can then invest in your academics. 
                                        Housing costs come with the requirment to purchase a meal plan.
                                         However, there are different prices at different dorms and different options and prices for meal plans. 
                                        Take a look at each to get a better look at what your costs could be."
                                        link="https://www.boisestate.edu/housing/housing-rates/residence-hall-rates/"
                                    /> 
                                </div>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Meal Plan" name="mealPlan" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({mealPlan: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="mealPlan" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="mealPlan" 
                                        title="Meal Plan" 
                                        body="If you are not living on campus you will need to buy food. 
                                        Enter the amount you plan on spending each month on food or groceries. 
                                        If you have parents or families who are paying for your food, enter 0."
                                        link="https://www.debtreductionservices.org/cost-groceries-person-month/"
                                    /> 
                                </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>


                    {/* Living off campus */}

                    <div>
                        <div  className="card-header font-weight-bold mt-3" id="toggler6">
                        Living off campus?
                        </div>
                        <UncontrolledCollapse toggler="#toggler6">
                        <Card>
                            <CardBody>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Rent" name="rent" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({rent: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="rent" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="rent" 
                                        title="Rent" 
                                        body="If you are not living on campus you will need to think about rent. 
                                        Enter the amount of rent you think you will pay for your housing each month. 
                                        If you are living at home and not paying rent, enter 0. "
                                        link="https://www.rentjungle.com/average-rent-in-boise-city-rent-trends/"
                                    /> 
                                </div>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Utilities" name="utilities" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({utilities: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="utilities" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="utilities" 
                                        title="Utilities" 
                                        body="Enter the amount you plan on paying for utilities  each month. 
                                        Include things like your cell phone, streaming services, internet, water, trash, gas, electric."
                                    /> 
                                </div>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Renter Insurance" name="rentInsurance" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({rentInsurance: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="rentInsurance" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="rentInsurance" 
                                        title="Renter Insurance" 
                                        body="Information"
                                    /> 
                                </div>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Food" name="food" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({food: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="food" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="food" 
                                        title="Food" 
                                        body="If you are not living on campus you will need to buy food. 
                                        Enter the amount you plan on spending each month on food or groceries. 
                                        If you have parents or families who are paying for your food, enter 0."
                                        link="https://www.debtreductionservices.org/cost-groceries-person-month/"
                                    /> 
                                </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>


                    {/* Transportation */}

                    <div>
                        <div  className="card-header font-weight-bold mt-3" id="toggler4">
                        Transportation
                        </div>
                        <UncontrolledCollapse toggler="#toggler4">
                        <Card>
                            <CardBody>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Gas or Bus Fair" name="gas" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({gas: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="gas" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="gas" 
                                        title="Gas or Bus Fair" 
                                        body="Enter the cost of gas or bus fair for the semester. Consider your cost/mile x # of miles to campus x # of trips/week x 16 week
                                        semester. You can explore other options like bike rental, and bus on the transportation website."
                                        link="boisestate.edu/publicsafety-transportation"                                        
                                    /> 
                                </div>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Parking" name="parking" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({parking: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="parking" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="parking" 
                                        title="Parking" 
                                        body="A parking permit can save you time allowing you to park any time you need it and not be late to class. 
                                        You can explore the costs of Boise State parking permits on the permit website"
                                        link="https://www.boisestate.edu/publicsafety-transportation/permit-information/"
                                    /> 
                                </div>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Car Insurance" name="carInsurance" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({carInsurance: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="carInsurance" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="carInsurance" 
                                        title="Car Insurance" 
                                        body="Enter the monthly cost for car insurance. Enter 0 if someone is paying this for you."
                                    /> 
                                </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>



                    {/* Paying for school */}

                    <div>
                        <div  className="card-header font-weight-bold mt-3" id="toggler3">
                        Paying for school
                        </div>
                        <UncontrolledCollapse toggler="#toggler3">
                        <Card>
                            <CardBody>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Scholarships" name="scholarships" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({scholarships: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="scholarships" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="scholarships" 
                                        title="Scholarships" 
                                        body="Enter the amount of money you ancitipate receiving in scholarships for the academic year to help pay for college."
                                    /> 
                                </div>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Income" name="income" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({income: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="income" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="income" 
                                        title="Income" 
                                        body="Enter the amount of you money you plan on earning (after taxes) for the year."
                                    /> 
                                </div>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Money from Parents" name="moneyFromParents" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({moneyFromParents: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="moneyFromParents" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="moneyFromParents" 
                                        title="Money From Parents" 
                                        body="Enter the amount of money you anticipate receiving from relatives to help you pay for college this year. Enter 0 if none."
                                    /> 
                                </div>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Loans" name="Loans" thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({loans: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="Loans" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="Loans" 
                                        title="Loans" 
                                        body="Loans can be a way to leverage your time by not working as much and/or be able to cover the cost of college. 
                                        Boise State graduates have an average loan amount of about $24,000. 
                                        Enter the amount of loans you plan on taking out to help you pay for college this year."
                                        link="https://www.collegefactual.com/colleges/boise-state-university/paying-for-college/student-loan-debt/"
                                    /> 
                                </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>



                    {/* After College */}

                    <div>
                        <div  className="card-header font-weight-bold mt-3" id="toggler7">
                        After college
                        </div>
                        <UncontrolledCollapse toggler="#toggler7">
                        <Card>
                            <CardBody>
                                <div className="mt-2">
                                    <NumberFormat placeholder="Anticipated Salary" name="anticipatedSalary" value={this.state.anticipatedSalary} thousandSeparator={true} prefix={'$'} onValueChange={ (values) => {const {value} = values; this.setState({anticipatedSalary: parseFloat(value)})}}/>
                                    <FontAwesomeIcon id="anticipatedSalary" className="ml-2" icon={faQuestionCircle} size="1x" />
                                    <Popover 
                                        id="anticipatedSalary" 
                                        title="Anticipated Salary" 
                                        body="Students graduating in 2018 with a bachelor's degree had an average predicted annual salary of $50,390. 
                                            Some fields can be much higher and some lower. Do some research to figure out the anticipated starting salary 
                                            in the field you are thinking about. If you aren't sure, just leave the default number."
                                        link="https://www.bls.gov/careeroutlook/2018/article/graduate-degree-outlook.htm"
                                    /> 
                                </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>

                    </form>
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
 
export default CostCalculator;