import {Box,Typography} from '@mui/material'

function About(){
    return(

        <div id="About-Us">

        <Box 
            sx={{
                background:'#1F1F1F',
                paddingLeft:'3%',
                paddingRight:'3%',
                paddingTop:'0.5%',
                textAlign:'center',
            }}
        >
            <Typography
                sx={{
                    color:'white',
                    fontFamily: "'Raleway', sans-serif",
                    fontSize:'45px',
                    fontWeight:'800',
                    margin:'1.5% 0',
                }}
            >
                About Us
            </Typography>
            <Box
                sx={{
                    background:'#28292A',
                    padding:'3%',
                    borderRadius:'23px',
                }}
                >
                <Typography
                    sx={{
                        color:'white',
                        fontSize:'24px',
                        fontWeight:'200',
                    }}
                >
                    We are students of Shri Ramdeobaba college of Engineering and Management , Nagpur . 
                    Our main aim behind this project was to bring the process of crowdfunding to blockchain by integrating blockchain with the crowdfunding . This will help bring transparency to the whole system of crowdfunding and increase trust among the donaters as to whether the fund donated by them is being properly tranferred to the right place or not. This process also has the added advantage the campaign creaters are bound to answer the donaters about the use of the money donated by the people. This reduces the practice of corruption here.
                    This project also has the concept of NFT's given to the donaters when they donate to a particular campaign , this ensures that every donater has a valid proof of their donation . This helps in massive outreach of the campaign and more funding .
                </Typography>
            </Box>
        </Box>

        </div>
    )
}

export default About