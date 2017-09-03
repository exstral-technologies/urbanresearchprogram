import React, { Component } from 'react';
import Hamburger from '../components/menubar/hamburger';
import HoverButton from '../components/buttons/hover_btn';
import Scroll from '../components/animations/scroll';
import Footer from '../components/footer/footer';

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
                <div className="hiw-img">
                    <h3>WHAT WE DO</h3>
                    <hr/>
                    <p className="hiw-text">The Urban Research Program was establish to improve the lives of urban and suburban communities.</p> 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Munich_-_Children_playing_in_a_merry-go-round_-_7347.jpg/1024px-Munich_-_Children_playing_in_a_merry-go-round_-_7347.jpg" alt="urban-research-project-children"/>
                    <p className="hiw-text">Creating an environment for future generations to thrive and succeed.</p>
                    <img src="https://lh3.googleusercontent.com/wZAuh4Y5TG3scFvSflb1fN4S0CRdB20oNZKhc0Ss_hcSGmvefdPlTcvafNuykTi8pQ=h310" alt="urban-research project -nice city"/>
                    <p className="hiw-text">Building and improving cities you can be proud of.</p>
                    <img src="http://www.riversongcochrane.com/assets/BlockImages/Amenity-Thumbnail-smr-758.jpg" alt="urban-research-project-ammmenities"/> 
                    <p className="hiw-text">Improving public ammenities to promote well being and social growth.</p>
                    <p className="hiw-statement">Making a difference one step at a time...</p>
                    </div>
                </div>
                <div className="hts">
                    <h3>Support the creation of the cities of the future</h3>
                    <div className="hts-img">
                        <img src="https://s-media-cache-ak0.pinimg.com/originals/48/89/e3/4889e383acf3c0855e6c8ac6d6611737.jpg" alt="utopia"/>
                        <img src="http://im.rediff.com/money/2011/nov/17cities4.jpg" alt="buildings"/>
                        <img src="http://rpmmultisite.s3-us-west-2.amazonaws.com/wp-content/uploads/sites/97/2015/07/future.png" alt="community area"/>
                        <img src="http://i.telegraph.co.uk/multimedia/archive/03126/info_driving-no_ca_3126014b.jpg" alt="smart city"/>
                    </div>
                </div>
                <div className="supportus">
                    <HoverButton hbutton="Support Us" link="/support"/>
                </div>
                
                <Footer link="/contactus"/>
            </div>
        );
    }
}

export default Home;