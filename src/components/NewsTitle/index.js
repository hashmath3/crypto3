import React from 'react'
import "./Styles.css";
import { motion } from "framer-motion";

function Newstitle() {
  return (
    <div>
          <motion.h1
          className="big-heading2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
        <span className="stroke">Latest News</span>
          <br />
          <span className="big-heading-blue">About Crypto.</span>
          </motion.h1>
    </div>
  )
}

export default Newstitle