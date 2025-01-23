import React from 'react'
import Typography from '../../../../component/ui/typography/typography';
import './Solutions.css'

const Solutions = ({description,title,contentFile}) => {
  return (
<>
<div className="Solution-text-content">
        <Typography component='headTitle'>{title} </Typography>
     
        
          <p className="" style={{ 

          }}>
     {description}
          </p>
       
      </div>


      <div className="Solution-image-container">
      {/* <img src={contentFile} alt="" /> */}
      </div>
</>
  )
}

export default Solutions
