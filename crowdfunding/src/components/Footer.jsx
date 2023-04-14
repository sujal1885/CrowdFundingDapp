import "./page.css";
import insta  from "../assets/inst.jpg"
import linkedin  from "../assets/link.jpg"
import twitter from "../assets/twit.jpg"


function Footer (){
    return (
        <>
            <div className="footer">
                <div className="content">
                    <div className="child1"></div>
                    <div className="child2">
                        <h3>sujalagrawal@gmail.com</h3>
                    </div>
                    <div className="child3">
                        <p>Follow Us</p>
                        <a href=""><img src={insta} alt=""/></a>
                        <a href=""><img src={linkedin} alt=""/></a>
                        <a href=""><img src={twitter} alt=""/></a>
                            
                    </div>
                </div>
                <hr />
                <p >Made with Love</p>
            </div>
        </>
        
    )
    
}
export default Footer