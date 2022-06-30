import { Card,Space,Button, } from 'antd';
import '../styles/card.css';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Ellipsis from 'ant-design-pro/lib/Ellipsis';
const { Meta } = Card;
const size=16;
const CardCompo = (props) => {

  const [isFlipped,setIsFlipped]=useState(false);
  const handleClick = ()=>{
    setIsFlipped(!isFlipped);
  }
return(
  <div className="site-card-border-less-wrapper">
    <Card 
      hoverable style={{borderRadius:"15px",border:"black",padding:"5px",borderStyle:"2px solid"}}
       > 
       {/* <Space direction='vertical' size={size} > */}
      <Meta
      
      title={props.title}
      description={props.description}
      style={{marginTop:"0px",textAlign:"center",marginBottom:"0px"}}
    />
      <ReactCardFlip isFlipped={isFlipped} flipDirection={'horizontal'}>
      <div className='cardfront' onClick={handleClick}>
      <p>{props.content1}</p>
      <Button onClick={handleClick} size="small" style={{borderRadius:"5px"}}>Flip</Button>
      </div>
      <div className='cardback' onClick={handleClick} style={{border:"red"}}>
      <p><Ellipsis tooltip length={50}>{props.content2}</Ellipsis></p>
      <Button onClick={handleClick} size="small" type="primary" ghost style={{backgroundColor:"rgba(43,120,212,255)",color:"white",borderRadius:"5px"}}>View details</Button></div>
      </ReactCardFlip>
      {/* </Space> */}
    </Card>
  </div>)
};

export default CardCompo;