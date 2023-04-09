import {Box,Typography,Grid} from '@mui/material'
import FoundersData from './foundersData'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import gmail from '../assets/gmail.jpeg'
import insta from '../assets/insta.jpeg'
import linkedin from '../assets/linkedin.jpeg'

function Founders() {
    return (
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
                        marginBottom:'5%',
                    }}
                >
                    Founders
                </Typography>
                <Grid container spacing={2}>
                 { FoundersData.map((item)=>{
                        const {id,name,icon,mailid,linkedinid,instaid} = item;
                        console.log(item.mailid);
                        return(
                      <Grid item md={3} sm={6} xs={12} key={id}>
                            <Card 
                            sx={{
                                padding:'10%',
                                background:'#28292A',
                                paddingBottom:'3%',
                                justifyContent:'center',
                                borderRadius:'32px',
                                boxShadow:'4px 6px 14px 2px rgba(0, 0, 0, 0.31)',
                                }}
                            >
                            <CardMedia
                                component="img"
                                alt="profile photo"
                                height="140"
                                image={icon}
                                style={{width: '100%', height: '250px'}}
                            />
                            <CardContent>
                                <Typography
                                    sx={{
                                        color:'white',
                                        paddingLeft:'17%',
                                        fontSize:'22px',
                                        marginBottom:'5%',
                                        fontWeight:'500',
                                        marginLeft:{
                                            md:'2%',
                                            xs:'30px',
                                        }
                                    }}
                                >
                                    {name}
                                </Typography>
                                <Box
                                    sx={{
                                        display:'flex',
                                        justifyContent:'center'
                                    }}
                                >
                                    <a href={mailid} target="_blank">
                                    <img src={gmail} alt="gmail" 
                                        style={{
                                            height:'50px',
                                            width:'50px',
                                            marginRight:'30px',
                                        }}
                                    />
                                    </a>
                                    <a href={linkedinid} target="_blank">
                                    <img src={linkedin} alt="linkedin" 
                                        style={{
                                            height:'40px',
                                            width:'40px',
                                            marginRight:'40px',
                                            marginTop:'5px',
                                        }}
                                    />
                                    </a>
                                    <a href={instaid} target='_blank'>
                                    <img src={insta} alt="insta" 
                                        style={{
                                            height:'40px',
                                            width:'40px',
                                            marginTop:'5px',
                                        }}
                                    />
                                    </a>
                                </Box>
                            </CardContent>
                        </Card> 
                    </Grid>
                        )
                       })}
                </Grid>
            </Box>
    )
}

export default Founders