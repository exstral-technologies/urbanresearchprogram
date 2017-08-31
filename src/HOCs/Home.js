import React, { Component } from 'react';
import Hamburger from '../components/menubar/hamburger';
import HoverButton from '../components/buttons/hover_btn';
import Scroll from '../components/animations/scroll';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <header><Hamburger/></header>
                <div className="jumbo">
                    <p>Urban Research Program</p>
                    <div className="jumbo-btn">
                        <HoverButton hbutton="Support Us" link="/support"/>
                    </div>
                    <div className="jumbo-scroll">
                        <Scroll/>
                    </div>
                </div>
                <div className="hiw">
                    <h3>Making a difference one step at a time...</h3>
                    <div className="hiw-img"> 
                        <img src="https://c1.staticflickr.com/1/22/26461678_0d39af7241.jpg" alt="broken basketball court"/>
                        <img src="https://img00.deviantart.net/ea5f/i/2010/260/2/7/ghetto_graffiti_by_smeredith-d2yy2us.jpg" alt="broken city"/>
                        <img src="http://www.heraldchronicle.com/wp-content/uploads/2017/01/potholes.jpg" alt="potholes"/> 
                        <img src="https://cdn.theatlantic.com/assets/media/img/mt/2015/08/RTR6HMO/lead_960.jpg?1438985887" alt="ghetto-us"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;