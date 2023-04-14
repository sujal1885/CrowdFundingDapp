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
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href=""><i class="fa-brands fa-twitter"></i></a> 
                        </div>
                    </div>
                </div>
                <hr />
                <p >Made with <i class="fa-solid fa-heart"></i></p>
            </div>
        </>
        
    )
    
}
export default Footer