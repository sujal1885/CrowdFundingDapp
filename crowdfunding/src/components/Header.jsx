import { Component } from "react";
import "./page.css";
import { Link } from "react-router-dom";

class Header extends Component{

    state ={ clicked:false};
    handleClick = () => {
        this.setState( {clicked:!this.state.clicked})
    }
    
    render(){
        return (
            <>
                <body>

                    <header id="Header">
                        <div>
                            <Link to="/">
                            <a href="">CWFunD</a>
                            </Link>
                        </div>
                        <div>
                            <ul 
                                className={!this.state.clicked ? "ul active":"ul" }
                                >
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/About"><li>About</li></Link>
                                <Link to="/Founders"><li>Founders</li></Link>
                                <Link to="/donateCampaign"><li>Donate</li></Link>
                            </ul>
                        </div>
                        <div id="mobile" onClick={this.handleClick}>
                            <id id="bar"
                                className={
                                    this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                                    ></id>
                        </div>

                    </header>
                </body>

            </>
            
            )
            
        }
    }
    export default Header