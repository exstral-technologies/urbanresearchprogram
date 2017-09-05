import React, { Component } from 'react';
import Hamburger from '../components/menubar/hamburger';
import PaperWrapper from '../components/paper/paper';
import FlatBtn from '../components/buttons/flatbutton';

class Support extends Component {
    
    constructor(props){
        super(props);
        this.state={value:0};
        this.clickValue = this.clickValue.bind(this);
        this.customValue = this.customValue.bind(this);
    }
    
    clickValue(e){
        this.setState({value:e});
    }

    customValue(e){
        e.preventDefault();
        this.setState({value:e.target.value});
    }

    render() {
        return (
            <div className="support">
                <header><Hamburger/></header>
                <div className="support-wrapper">
                    <p>Thank You For The Support!</p>
                </div>
                <div>
                    <FlatBtn label={100} handleClick={()=>{this.clickValue('100')}}/>
                    <FlatBtn label={50} handleClick={()=>{this.clickValue('50')}}/>
                    <FlatBtn label={20} handleClick={()=>{this.clickValue('20')}}/>
                    <FlatBtn label={10} handleClick={()=>{this.clickValue('10')}}/>
                    <FlatBtn label={5} handleClick={()=>{this.clickValue('5')}}/>
                    <form className="support-form"><input type="text" onChange={this.customValue} placeholder="custom amount"/></form>
                    <p className="support-total">Contribution: <div>${this.state.value}</div></p>
                    <PaperWrapper/>
                </div>
            </div>
        );
    }
}

export default Support;

// <FlatBtn label="$50"  onClick={clickValue('50')}/>
// <FlatBtn label="$20"  onClick={clickValue('20')}/>
// <FlatBtn label="$10"  onClick={clickValue('10')}/>
// <FlatBtn label="$5"  onClick={clickValue('10')}/>