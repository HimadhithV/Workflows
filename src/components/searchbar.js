import { AudioOutlined } from '@ant-design/icons';
import { Input} from 'antd';
const { Search } = Input;

function HeaderSearchBar()
{

    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );
      
      const onSearch = (value) => console.log(value);
    return(
        <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
   
    );
}

export default HeaderSearchBar;