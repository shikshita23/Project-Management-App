import { Collapse, CollapseProps, Divider, Dropdown,  } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import Todo from './Todo';
import Ongoing from './Ongoing';
import Completed from './Completed';
import '../../Theme/Css/MyTask.css'

const { Panel } = Collapse;
const text = `
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
`
const text2 = `
    Hello this is text 2.
`
const text3 = `
    Hello this is text 3 
`
 const todoContent = (
  <Todo/>

 );


const ongoingContent = (
  <Ongoing/>
);

const completedContent = (
  <Completed/>
);
const MyTask = () => {
  return (
    <div>
        <div className="tabletitle">
        <div className="Head grid grid-cols-4  titleFont font-semibold mt-4 mb-5 ">
          
          <div className="bg-gray-200 ps-[100px] p-3 ">ID</div>
          <div className="bg-gray-200 py-3 ps-10">Task</div>
          <div className="bg-gray-200  py-3 ps-10">Priority</div>
          <div className="bg-gray-200 py-3 ps-10 ">Due Date </div>
        </div>
        <div className='main'>

        <Collapse className='mt-[20px]' expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} defaultActiveKey={['1']}  bordered={false} >
          <Panel header="Todo" key="1">
            {todoContent}
          </Panel>
        </Collapse>
        <Collapse className='mt-[20px]' expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} defaultActiveKey={['1']}  bordered={false} >
          <Panel header="Todo" key="1">
            {ongoingContent}
          </Panel>
        </Collapse>
        <Collapse className='mt-[20px]' expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} defaultActiveKey={['1']}  bordered={false} >
          <Panel header="Todo" key="1">
            {completedContent}
          </Panel>
        </Collapse>
        </div>
        

       

        </div>

    </div>
  )
}

export default MyTask
