import { Component } from "react";
import "./page.css";

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
                            <a href="">CWFunD</a>
                        </div>
                        <div>
                            <ul 
                                className={!this.state.clicked ? "ul active":"ul" }
                                >
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Donate</li>
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