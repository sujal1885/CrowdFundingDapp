import { Component } from "react";
import "./page.css";
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

class Header extends Component{

    state ={ clicked:false};
    handleClick = () => {
        this.setState( {clicked:!this.state.clicked})
    }
    
    render(){
        return (
            <>
                <body>
                    <header>
                        <div>
                            <Link to="/"><a>CWFunD</a></Link>
                        </div>
                        <div>
                            <ul 
                                className={!this.state.clicked ? "ul active":"ul" }
                                >
                                <li><Link to="/" 
                                style={{
                                    fontSize:"17px",
                                    fontWeight:'200'
                                }}>
                                    Home
                                </Link></li>
                                <li><Link to="/About"
                                     style={{
                                        fontSize:"17px",
                                        fontWeight:'200'
                                    }}
                                >About</Link></li>
                                <li><Link to="/Founders"
                                     style={{
                                        fontSize:"17px",
                                        fontWeight:'200'
                                    }}
                                >Founders</Link></li>
                                <li><Link to="/donateCampaign" 
                                style={{
                                    fontSize:"17px",
                                    fontWeight:'200'
                                }} 
                                >
                                    Donate</Link></li>
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