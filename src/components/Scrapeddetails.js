import React,{useEffect,useState}from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import {Box,Typography,Card,Button} from '@mui/joy';
//import Button from '@mui/joy/Button';
//import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
//import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
 import axios from 'axios';
 import Grid from '@mui/material/Grid';


 console.log("hello this came");
function Scrapeddetails(){

const [apidata,setapidata]=useState([]);

useEffect(()=>{
async function getapidata(){
 //https://webcode2backend.herokuapp.com/amazon/get this is my actual live api which i was created but it works well in my local host but show appliction error in heroku 
   const apiurl=`http://localhost:3001/amazon/get`;
const response=await axios.get(apiurl);

setapidata(response.data.data);

}
getapidata();

},[])

return(
<>
{
  apidata.map((row)=>(
 
<Grid  key={row._id} container spacing={2}>
<Grid item xs={4}>
<Card  variant="outlined" sx={{ width: 320 }} >
  <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
    
  </Typography>
  <Typography level="body2">{row.name}</Typography>
  <IconButton
    aria-label="bookmark Bahamas Islands"
    variant="plain"
    color="neutral"
    size="sm"
    sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
  >
    <BookmarkAdd />
  </IconButton>
  <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
    <img
      src={row.image}
      srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
      loading="lazy"
      alt=""
    />
  </AspectRatio>
  <Box sx={{ display: 'flex' }}>
    <div>
      <Typography level="body3">Total price:</Typography>
      <Typography fontSize="lg" fontWeight="lg">
      {row.price}
      </Typography>
    </div>
    <div>
      <Typography level="body3">Ratings</Typography>
      <Typography fontSize="lg" fontWeight="lg">
      {row.rating}
      </Typography>
    </div>
    <Button
      variant="solid"
      size="sm"
      color="primary"
      aria-label="Explore Bahamas Islands"
      sx={{ ml: 'auto', fontWeight: 600 }}
    >
     <a href={row.link}>TO Buy</a>
    </Button>
  </Box>

  </Card> 

  </Grid>
   </Grid>

))
}
</>
)


}
export default Scrapeddetails;
