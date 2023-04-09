import {Box,Typography} from '@mui/material'

function About(){
    return(
        <Box
            sx={{
                background:'#1F1F1F',
                paddingLeft:'3%',
                paddingRight:'3%',
                paddingTop:'0.5%',
                paddingBottom:'5%',
            }}
        >
            <Typography
                sx={{
                    color:'white',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize:'45px',
                    fontWeight:'500',
                }}
            >
                About us
            </Typography>
            <Box
                sx={{
                    background:'#28292A',
                    padding:'3%',
                    marginTop:'2%',
                    borderRadius:'23px',
                }}
            >
                <Typography
                    sx={{
                        color:'white',
                        fontSize:'25px',
                        fontWeight:'300',
                        fontFamily: "'Poppins', sans-serif",
                    }}
                >
                    We are students of Shri Ramdeobaba college of Engineering and Management , Nagpur . 
                    Our main aim behind this project was to bring the process of crowdfunding to blockchain by integrating blockchain with the crowdfunding . This will help bring transparency to the whole system of crowdfunding and increase trust among the donaters as to whether the fund donated by them is being properly tranferred to the right place or not. This process also has the added advantage the campaign creaters are bound to answer the donaters about the use of the money donated by the people. This reduces the practice of corruption here.
                    This project also has the concept of NFT's given to the donaters when they donate to a particular campaign , this ensures that every donater has a valid proof of their donation . This helps in massive outreach of the campaign and more funding .
                </Typography>
            </Box>
        </Box>
    )
}

export default About