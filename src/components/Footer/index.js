import axios from "axios";
import styles from "./styles.css";
import React, { useEffect, useState } from 'react'
function Footer() {
  const [news ,settest] = useState([]);

  useEffect(()=>{
      getnews()

  },[])

  async function getnews(){ 
    // http://api.mediastack.com/v1/news?access_key=15c6fac6ad7ae388cf5cbb296d533c0e&keywords=crypto & languages=en
      const url ="https://cryptopanic.com/api/v1/posts/?auth_token=b0c5faf7f2ea0a46f1004415d014ac1c3ceeebcf&public=true"
       const axiosresp =await axios.get(url);
       console.log('axios data', axiosresp.data);
       settest(axiosresp.data.results);
  }

  return <div id="footer" className="footer-wrapper">
    has
  </div>;
}

export default Footer;