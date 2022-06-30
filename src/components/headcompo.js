import { Layout} from 'antd';
import { PageHeader } from 'antd';
import { OmitProps } from 'antd/lib/transfer/ListBody';


const HeadCompo=(props)=>(

<>

  <PageHeader
    className="site-page-header"
    // onBack={() => null}
    title={props.title}
    subTitle={props.subtitle}
  />
</>

)

export default HeadCompo;       
