import React, { useState } from 'react';
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
const contentList: Record<string, React.ReactNode> = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
  };
const tabList = [
    {
      key: 'tab1',
      tab: 'tab1',
    },
    {
      key: 'tab2',
      tab: 'tab2',
    },
  ];
const CardsTabs = () => {
    const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
    const onTab1Change = (key: string) => {
        setActiveTabKey1(key);
      };
      
  return (
    <Card
        style={{ width: '100%' }}
        title="Card title"
        extra={<FontAwesomeIcon icon={faEllipsis} />}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
        className=' mt-7 '
      >
        {contentList[activeTabKey1]}
      </Card>
  )
}

export default CardsTabs
