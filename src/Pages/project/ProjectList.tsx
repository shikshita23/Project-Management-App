
import { Button, Dropdown } from "antd";
import "../../Theme/Css/ProjectList.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {   faSquarePen,  faTrash } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { useGetProj } from "./common/useGetProj";
import { useDeleteProj} from "./common/useDeleteUser";
import { Divider } from 'antd';
import { MouseEvent, useEffect, useState } from "react";
import { EllipsisOutlined } from '@ant-design/icons';
type ProjectValues={
  id:number;
  name:string;
  description:string;
  start_date:Date;
  end_date:Date;
  owner_id:number;
}
export default function ProjectList  ()  {
  const[proId,setProId] = useState<number>()
  const[proOwnerId,setProOwnerId] = useState<number>()
  const handleDelete = (id:number,owner_id:number)=>{
    
    console.log("clicked id is",id,owner_id)
    deleteMutation.mutate({ project_id:id , owner_id:owner_id})
  }
  const handleClick = (e: MouseEvent<HTMLAnchorElement, MouseEvent>,id:number,owner_id:number)=>{
    e.preventDefault();
    setProId(id)
    setProOwnerId(owner_id)
    
  }
  const items: MenuProps['items'] = [
    {
      label: "edit",
      key: '0',
    },
    {
      label: <div onClick={()=>{handleDelete(proId,proOwnerId)}}>delete</div>,
      key: '1',
    },
  ];
    const navigate= useNavigate();
   const handleCreateProject=()=>{
    navigate("/create_project")
   }

   const { data, error, isLoading, refetch: refetchUsers  } = useGetProj();
   console.log("Project Data from Database==>",data)
   const formatDate = (date: Date) => {
     return new Date(date).toLocaleDateString(); // Customize format as needed
    };
    
    const onSuccess = () => {
      console.log("successfuly get")
    };
    const { mutation: deleteMutation } = useDeleteProj(onSuccess);
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
            <Button type="primary" onClick={()=>handleCreateProject() } className="font-bold">Create Project</Button>
        </div>
      </div>
      <div className="HeroContent bg-white mt-6 pt-4 min-h-lvh px-4">  
          <div className="Head grid grid-cols-7  titleFont font-semibold mt-4 table ">
              <div className="bg-gray-200 ps-10 p-3">ID</div>
              <div className="bg-gray-200 py-3 ps-10">Name</div>
              <div className="bg-gray-200 py-3 ps-10 col-span-2">Descirption</div>
              <div className="bg-gray-200  py-3 ps-[35px]">Start Date</div>
              <div className="bg-gray-200 py-3 ps-7 col-span-2">End Date</div>
          </div>
       
              {/* <div>Progress</div> */}
              {data?.Projects.map((projects:ProjectValues)=>(
                <>
                <div className="projectList grid grid-cols-7 ms-2 pt-[28px] pb-[28px]" key={projects.id} >
                  <div className="ms-11 " >{projects.id}</div>
                  <div className="ms-7 ">{projects.name}</div>
                  <div className="ms-7 col-span-2 ms-[33px]" >{projects.description}</div>
                  <div className="ms-[33px]">{formatDate(projects.start_date)}</div>
                  <div className="ms-7 ms-[33px]">{formatDate(projects.end_date)}</div>
                  <div className="pe-[30px] flex justify-end">
                  <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) =>handleClick(e,projects.id, projects.owner_id)} className="pe-15">
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

