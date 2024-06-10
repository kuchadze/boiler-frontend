import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { JSX } from 'react';
import { ColumnSearchPropsInterface } from '@/app/Components/Table/interfaces/column-search-props-interface';

const ColumnSearch: (props: ColumnSearchPropsInterface) => JSX.Element = (
  props,
) => {
  return (
    <div style={{ padding: 8 }}>
      <Input
        placeholder={`Search ${props.dataIndex}`}
        value={props.selectedKeys[0]}
        onChange={(e) =>
          props.setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() =>
          props.handleSearch(props.selectedKeys, confirm, props.dataIndex)
        }
        style={{ width: 188, marginBottom: 8, display: 'block' }}
      />
      <Button
        type="primary"
        onClick={() =>
          props.handleSearch(props.selectedKeys, confirm, props.dataIndex)
        }
        icon={<SearchOutlined />}
        size="small"
        style={{ width: 90, marginRight: 8 }}
      >
        Search
      </Button>
      <Button
        onClick={() => props.handleReset(props.clearFilters, props.dataIndex)}
        size="small"
        style={{ width: 90 }}
      >
        Reset
      </Button>
    </div>
  );
};

export default ColumnSearch;
