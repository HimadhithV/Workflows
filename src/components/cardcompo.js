import { Card,Space,Button,Avatar } from 'antd';
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
const [borderline,setBorderLine] = useState("#ecf4ff");


const setStyle = (borderline)=>
{
  setBorderLine(borderline);
}
const abc=document.getElementByClassName('carddd');
console.log(abc);
return(
  <div className="site-card-border-less-wrapper" style={{border:"black"}}>
    <Card 
      hoverable style={{borderRadius:"15px",padding:"5px",borderColor:borderline,borderWidth:"3px"}} className="carddd"
       onMouseEnter={()=>setStyle("#327dd6")} onMouseLeave={()=>setStyle("#ecf4ff")}
       >
      
      <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={props.title}
      description={props.description}
      style={{marginTop:"-20px",textAlign:"center",marginBottom:"0px"}}
    />
      <ReactCardFlip isFlipped={isFlipped} flipDirection={'horizontal'}>
      <div className='cardfront' onClick={handleClick} style={{border:"black"}}>
      <p>{props.content1}</p>
      <Button onClick={handleClick} size="small" style={{borderRadius:"5px"}}>Flip</Button>
      </div>
      <div className='cardback' onClick={handleClick} style={{border:"red"}}>
      <p><Ellipsis tooltip length={37}>{props.content2}</Ellipsis></p>
      <Button onClick={handleClick} size="small" type="primary" ghost style={{backgroundColor:"rgba(43,120,212,255)",color:"white",borderRadius:"5px"}}>View details</Button></div>
      </ReactCardFlip>
      {/* </Space> */}
    </Card>
  </div>)
};

export default CardCompo;