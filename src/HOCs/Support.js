import React, { Component } from 'react';
import Hamburger from '../components/menubar/hamburger';
import PaperWrapper from '../components/paper/paper';
import FlatBtn from '../components/buttons/flatbutton';

class Support extends Component {
    constructor(props){
        super(props);
        this.state={value:null};
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e){
        console.log(e.target.value);
    }
    render() {
        return (
            <div className="support">
                <header><Hamburger/></header>
                <div className="support-wrapper">
                    <p>Thank You For The Support!</p>
                </div>
                <div>
                    <FlatBtn label="$100" type="submit" value="100" onClick={this.handleClick}/>
                    <PaperWrapper/>
                </div>
            </div>
        );
    }
}

export default Support;