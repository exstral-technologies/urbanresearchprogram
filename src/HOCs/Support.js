import React, { Component } from 'react';
import Hamburger from '../components/menubar/hamburger';
import PaperWrapper from '../components/paper/paper';
import FlatBtn from '../components/buttons/flatbutton';
import Checkout from '../components/payment/checkout';
import Footer from '../components/footer/footer';

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
                <div className="support-btn">
                    <div>
                        <FlatBtn label={'$100'} css="btn100" handleClick={()=>{this.clickValue('100')}}/>
                        <FlatBtn label={'$50'} css="btn50" handleClick={()=>{this.clickValue('50')}}/>
                    </div>
                    <div>
                        <FlatBtn label={'$20'} css="btn20" handleClick={()=>{this.clickValue('20')}}/>
                        <FlatBtn label={'$10'} css="btn10" handleClick={()=>{this.clickValue('10')}}/>
                    </div>
                    <FlatBtn label={'$5'} css="btn5" handleClick={()=>{this.clickValue('5')}}/>
                </div>
                <form className="support-form"><input type="text" onChange={this.customValue} placeholder="custom amount"/></form>
                <p className="support-total">Contribution: <div>${this.state.value}</div></p>
                <div className="pay-btn">
                    <Checkout
                    name={'Urban Research Program'}
                    description={'Contribution'}
                    amount={this.state.value}
                    />
                </div>
                <PaperWrapper/>
                <Footer link="/contactus"/>
            </div>
        );
    }
}

export default Support;

// <FlatBtn label="$50"  onClick={clickValue('50')}/>
// <FlatBtn label="$20"  onClick={clickValue('20')}/>
// <FlatBtn label="$10"  onClick={clickValue('10')}/>
// <FlatBtn label="$5"  onClick={clickValue('10')}/>