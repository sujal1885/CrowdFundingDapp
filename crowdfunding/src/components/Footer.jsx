import "./page.css";

function Footer (){
    return (
        <>
            <div className="footer" id="Footer">
                <div className="content">
                    <div className="child1"></div>
                    <div className="child2">
                        <p>sujalagrawal@gmail.com</p>
                    </div>
                    <div className="child3"  >
                        {/* <div> */}
                            <h3>Follow Us</h3>
                        {/* </div> */}
                        <div >
                            <a href="https://www.instagram.com/aka_sujal_/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/sujal-agrawal-655781230/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="mailto:sujalagrawalgondia.com" target="_blank"><i className="fa-brands fa-twitter"></i></a> 
                        </div>
                    </div>
                </div>
                <hr />
                <p >Made with <i className="fa-solid fa-heart"></i></p>
            </div>
        </>
        
    )
    
}
export default Footer