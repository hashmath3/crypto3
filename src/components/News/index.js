import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';
import "./styles.css";
import Button from '../Button';

const News = () => {
    const[news ,setnews]= useState([]);


  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=b4ad662a7be24aa884b41708e5b1916b", { crossDomain: true })
    .then((response)=>{
        console.log(response);
        setnews(response.data.articles)
    })

  },[]);
  return (
    <div className='container-card' id='card-news'>
    <div className='cards' >{ news.map((value)=>{
        return(
            <div className='card'>
             <div className='img'>   <img className='news-img' src={value.urlToImage} /></div>
             <div className='description'>   <h4>{value.title}</h4>
               <p>{value.description}</p>  </div>
               <div className='button'><a href={value.url}>
                    <Button text="Read_Full_Article"/></a>  </div>           
            </div>
        )
    })
        }
     
              
            

      
   
    </div>
    </div>
  )
}

export default News