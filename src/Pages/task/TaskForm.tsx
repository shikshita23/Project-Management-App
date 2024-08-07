

import {  Dropdown } from "antd";
import "../../Theme/Css/ProjectList.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {   faSquarePen,  faTrash } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { useNavigate} from "react-router-dom";
 import { useGetTask } from "./common/useGetTask";
  import { useDelTask} from "./common/useDelTasks";
import { Divider } from 'antd';
import { MouseEvent, useEffect, useState } from "react";
import { EllipsisOutlined } from '@ant-design/icons';
type TaskValues={
  id:number;
  task:string;
  status:string;
  priority:string;
  assignee_id:number;
  due_date:Date;
  project_id:number;
}
export default function TaskForm  ()  {
  const[proId,setProId] = useState<number>()
  const[proTaskId,setProTaskId] = useState<number>()
  const handleDelete = (task_id:number,project_id:number,)=>{
    
    console.log("clicked id is",task_id)
    deleteMutation.mutate({task_id:task_id, project_id:project_id })
  }
  const handleClick = (e: MouseEvent<HTMLAnchorElement, MouseEvent>,task_id:number,project_id:number)=>{
    e.preventDefault();
    setProId(project_id)
    setProTaskId(task_id)
    
  }
  const items: MenuProps['items'] = [
    {
      label: "edit",
      key: '0',
    },
    {
      label:<div onClick={()=>{handleDelete(proTaskId,proId)}}>delete</div>,
      key: '1',
    },
  ];
    // const navigate= useNavigate();
  //  const handleCreateProject=()=>{
  //   navigate("/create_project")
  //  }

    const { data, error, isLoading ,refetch:refetchUsers } = useGetTask();
  console.log("Task Data from Database==>",data)
   const formatDate = (date: Date) => {
     return new Date(date).toLocaleDateString(); // Customize format as needed
    };
    
    const onSuccess = () => {
      console.log("successfuly get Task")
    };
   const { mutation: deleteMutation } = useDelTask(onSuccess);
    useEffect(() => {
      if (deleteMutation?.isSuccess === true) {
        console.log("successfully created")
        refetchUsers();
      }
    }, [deleteMutation?.isSuccess]);
    if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Errors</div>;
    // const handleProjectList=()=>{
    //   navigate("/taskForm")
    // }
   return (
    <>
      <div className="titleBar flex justify-between">
        <div className="TitleName">
            Project Name
        </div>
        <div>
            {/* <Button type="primary" onClick={()=>handleCreateProject() } className="font-bold">Create Project</Button> */}
        </div>
      </div>
      <div className="HeroContent bg-white mt-6 pt-4 min-h-lvh px-4">  
          <div className="Head grid grid-cols-7  titleFont font-semibold mt-4 table ">
              <div className="bg-gray-200 ps-10 p-3">ID</div>
              <div className="bg-gray-200 py-3 ps-10">Task</div>
              <div className="bg-gray-200 py-3 ps-10">Status</div>
              <div className="bg-gray-200  py-3 ps-[35px]">Priority</div>
              <div className="bg-gray-200 py-3 ps-7 ">Assignee </div>
              <div className="bg-gray-200 py-3 ps-7 col-span-2">Due Date </div>
          </div>
       
              {/* <div>Progress</div> */}
              {data?.map((tasks:TaskValues)=>(
                <>
                <div className="taskList grid grid-cols-7 ms-2 pt-[28px] pb-[28px]" key={tasks.id} >
                  <div className="ms-11 " >{tasks.id}</div>
                  <div className="ms-7 ">{tasks.task}</div>
                  <div className="ms-7 ms-[33px]" >{tasks.status}</div>
                  <div className="ms-[33px]">{tasks.priority}</div>
                  <div className="ms-7 ms-[33px]">{tasks.assignee_id}</div>
                  <div className="ms-7 ms-[33px]">{formatDate(tasks.due_date)}</div>
                  <div className="pe-[30px] flex justify-end">
                  <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) =>handleClick(e,tasks.id, tasks.project_id)} className="pe-15">
                       <EllipsisOutlined /> 
                     </a>
                  </Dropdown>	
						</div>
            
                </div>
                <Divider className="m-0"/>
                </>
              )
            )
              }       
      </div>
      
    </>
  )
}

