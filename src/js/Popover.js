import React, { Component } from 'react';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

class Popover extends Component {
    render() {
        var props = this.props; 
        return ( 
            <UncontrolledPopover placement="right" target={props.id} trigger="hover">
                <PopoverHeader className="text-center">{props.title}</PopoverHeader>
                <PopoverBody>{props.body} <a href={props.link}>{props.link}</a></PopoverBody>
            </UncontrolledPopover>
         );
    }
}
 
export default Popover;