import React from 'react'
import LandingSection from '../LandingSection/LandingSection'
import Typography from '../../../../component/ui/typography/typography'
import './NFT.css'
import {  useNavigate } from 'react-router-dom'
const NFTSection = () => {
  const navigate = useNavigate();

  const onClickFun=()=>{
    navigate("/auctions")
  
  }
  return (
    <div className='NFTSection'>
        <LandingSection >
        <div className="NFT-text-content">
        <Typography component='headTitle' onClickFun={onClickFun }> NFT Auction</Typography>
       
     
        
        <p className="" style={{ 

}}>
 COMING SOON
</p>
         
       
      </div>


      <div className="NFT-image-container">
      <img src={'assets/Images/11.jpg'} alt="" />
      </div>


        </LandingSection>
    
    </div>
  )
}

export default NFTSection



