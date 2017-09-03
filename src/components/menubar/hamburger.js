import React,{Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';

class Hamburger extends Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleToggle(){this.setState({open: !this.state.open})};
    
    handleClose(){this.setState({open: false})};

    render(){
        return (
            <div className="hmbg-menu">
                <button className="hamburger1" type="button" onClick={this.handleToggle}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                    containerStyle={{background:"#62EDD6",textDecoration:"none"}}
                >
                    <Link to="/"><MenuItem onClick={this.handleClose}>Home</MenuItem></Link>
                    <MenuItem onClick={this.handleClose}><Link to="/support">Support</Link></MenuItem>
                    <MenuItem onClick={this.handleClose}><Link to="/contactus">Contact Us</Link></MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Hamburger;