import React,{Component} from 'react';
import './Menu.css';
import { Redirect } from 'react-router';
import Cards from './Cards';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 
const styles = {
    slideInRight: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(slideInRight, 'slideInRight')
  }
}

class Menu extends Component {
    constructor(){
        super();
        this.state={
            redirect: false
        }
    }
    render(){
        let redirect = null;
        if(this.state.redirect){
            redirect=<Redirect to="/signup"/>
        }
        return(
            <StyleRoot>
            <div className="Page">
            <div className="Menu">
                <div className="Content" style={styles.slideInRight}>
                    
                    <div className="Con">
                <h1>Let's build a healthy world. </h1>
                <p>
                    Facing problem to appoint a doctor and monitor yourself in these lockdown days?
                </p>
                <h2>That's easy now</h2>
                <button onClick={()=> this.setState({redirect: true})}>Register now</button>
                {redirect}
                </div>
                <img src="https://www.kindpng.com/picc/m/275-2754908_department-of-health-doctors-hd-png-download.png" alt="doc"/>
                </div>
               
            </div>
            <Cards/>
            </div>
            </StyleRoot>
        );
    }
}

export default Menu;