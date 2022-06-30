import CardCompo from './cardcompo'
import details from './data/deets';
import '../styles/cardcompo.css'
import { Col, Row } from 'antd';

function createCard(inform)
{
  return <CardCompo 
  key={inform.id}
  title={inform.title} 
  description={inform.description} 
  content1={inform.content1} 
  content2={inform.content2}/>

}

function Cont()
{
    return(
    <div className='cardcompo'>
    <Row>
        
        {details.map(createCard)}
        
    
    
    </Row>
      </div>)
}

export default Cont;
