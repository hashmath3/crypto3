import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';

import Button from '../Button';

const Test = () => {
    const [news ,settest] = useState([]);

    useEffect(()=>{
        getnews()

    },[])
    async function getnews(){ 
      // http://api.mediastack.com/v1/news?access_key=15c6fac6ad7ae388cf5cbb296d533c0e&keywords=crypto & languages=en
        const url ="https://cryptopanic.com/api/v1/posts/?auth_token=b0c5faf7f2ea0a46f1004415d014ac1c3ceeebcf&public=true"
         const axiosresp =await axios.get(url);
         console.log('axios data', axiosresp.data)
         settest(axiosresp.data.results);
    }

  
  return (
    <div className='container-card' id='card-news'>
    <div className='cards' >{ news.map((value)=>{
        return(
            <div className='card'>
             {/* <div className='img'>   <img className='news-img' src={value.urlToImage} /></div> */}
             <div className='description1'>   <h4>{value.title}</h4>
               <p>{value.slug}</p>  </div>
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

export default Test