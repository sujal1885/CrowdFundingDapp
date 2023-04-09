import "./page.css";

function Home (){
    return (
        <>
                <div className="Home">
                    <div className="container"></div>
                    <div className="content">
                        <h3 style={{
                            fontSize:'3.5rem',
                            fontFamily: 'Raleway',
                            fontWeight:'700',
                        }}>CWFunD</h3>

                        <p style={{
                            fontSize:'1rem',
                        }}>Contributing towards better tomorrow</p>

                        <a href="" style={{
                            textDecoration:'None',
                            color:'black',
                            backgroundColor:'#D9D9D9',
                            marginTop:'1.6rem',
                            fontFamily: 'open-sans',
                            marginBottom:'0.4rem',
                            padding:'0.4rem 2rem',
                            borderRadius:'45px',
                            width:'5rem',
                            fontSize:'1.5rem'
                        }}>Create</a>

                        <p style={{
                            fontSize:'0.7rem',
                        }}>click here to create campaign!!</p>
                    </div>
                </div>

        </>
        
    )
    
}
export default Home