

import { Button, Dropdown, InputNumber, InputNumberProps, MenuProps, Select } from "antd";
import "../../Theme/Css/ProjectList.css"
import { useGetTask } from "./common/useGetTask";
import { useDelTask } from "./common/useDelTasks";
import { Divider } from 'antd';
import { MouseEvent, useEffect, useState } from "react";
import { EllipsisOutlined } from '@ant-design/icons';
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from './TaskSchema'
import { Controller, useForm } from "react-hook-form";
import InputField from "../../Components/Atoms/Input/InputField";
import Dates from "../../Components/Atoms/Input/Dates";
import { usePostTask } from "./common/usePostTask";
type TaskValues = {
  id: number;
  task: string;
  status: string;
  priority: string;
  due_date: Date |null;
  project_id: number;
  assignee_id: number;
}

export default function TaskForm() {

  const { control, handleSubmit } = useForm<TaskValues>({
    defaultValues: {
      task: "",
      status: "",
      priority: "",
      due_date:null,
      assignee_id: 1,
      project_id:2,
    },
    resolver: yupResolver(schema),
  });
  const onSuccesss = () => {
    console.log('created successfully');

  };  
  const { mutation } = usePostTask(onSuccesss);

  const onSubmit = async (data: TaskValues) => {
    console.log("task submitted with ", data)
    const formattedData={
      ...data,
      due_date: data.due_date ? data.due_date.toISOString().split('T')[0] : ''  

    }
    console.log('formattedData', formattedData);
    mutation.mutate(formattedData);
  };

  const [selectBg, setSelectBg] = useState("#ED4647")
  const [selectBgPriority, setSelectBgPriority] = useState("#4ade80")
  const [proId, setProId] = useState<number>()
  const [proTaskId, setProTaskId] = useState<number>()
  const handleDelete = (task_id: number, project_id: number,) => {

    console.log("clicked id is", task_id)
    deleteMutation.mutate({ task_id: task_id, project_id: project_id })
  }

  useEffect(()=>{
    if(mutation?.isSuccess===true){
      refetchUsers();
    }
  })
  const handleClick = (e: MouseEvent<HTMLAnchorElement, MouseEvent>, task_id: number, project_id: number) => {
    e.preventDefault();
    setProId(project_id)
    setProTaskId(task_id)

  }
  const itemsOption: MenuProps['items'] = [
    {
      label: "edit",
      key: '0',
    },
    {
      label: <div onClick={() => { handleDelete(proTaskId, proId) }}>delete</div>,
      key: '1',
    },
  ];


  const { data, error, isLoading, refetch: refetchUsers } = useGetTask();
  console.log("Task Data from Database==>", data)
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString(); // Customize format as needed
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange: InputNumberProps['onChange'] = (value: any) => {
    console.log('changed', value);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeProject: InputNumberProps['onChange'] = (value: any) => {
    console.log('changed value of projectId', value);
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
  }, [deleteMutation?.isSuccess, refetchUsers]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Errors</div>;

  const handleChange = (value: string) => {
    

    console.log(`selected ${value}`);

    if (value == 'todo') {
      setSelectBg("#ED4647")
    }
    else if (value == 'inprogress') {
      setSelectBg("#facc15")
    }
    else if (value == 'finished') {
      setSelectBg("#4ade80")
    }
  };
  const handlePriority = (value: string) => {

    switch (value) {
      case "low":
        setSelectBgPriority("#4ade80")
        return selectBgPriority;
      case "medium":
        setSelectBgPriority("#facc15")
        return selectBgPriority;
      case "high":
        setSelectBgPriority("#ED4647")
        return selectBgPriority;
      default:
        setSelectBgPriority("#4ade80")
        return selectBgPriority;
    }
  }
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
        {data?.map((tasks: TaskValues) => (
          <>
            <div className="taskList grid grid-cols-7 ms-2 pt-[28px] pb-[28px]" key={tasks.id} >
              <div className="ms-11 " >{tasks.id}</div>
              <div className="ms-7 ">{tasks.task}</div>
              <div className="ms-7 ms-[33px]" >{tasks.status}</div>
              <div className="ms-[33px]">{tasks.priority}</div>
              <div className="ms-7 ms-[33px]">{tasks.assignee_id}</div>
              <div className="ms-7 ms-[33px]">{formatDate(tasks.due_date)}</div>
              <div className="pe-[30px] flex justify-end">
                <Dropdown menu={{ items: itemsOption }} trigger={['click']}>
                  <a onClick={(e) => handleClick(e, tasks.id, tasks.project_id)} className="pe-15">
                    <EllipsisOutlined />
                  </a>
                </Dropdown>
              </div>

            </div>
            <Divider className="m-0" />
          </>
        )
        )
        }


        <form className="taskCreate" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex grid grid-cols-7 ms-2 pt-[28px] pb-[28px]">
            <div>

            </div>
            <div>
              <InputField
                control={control}
                name="task"
                type="text"
                size="large"
                placeholder="Task Name"
                className="  border-0 focus:placeholder-transparent focus:shadow-none"
              />
            </div>
            <div className="mx-2 flex align-middle">
            <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    style={{ width: 120, borderRadius: "8px", backgroundColor: selectBg, border: "none" }}
                    onChange={(value) => {
                      field.onChange(value);
                      handleChange(value);
                      
                    }}
                    options={[
                      { value: 'todo', label: 'Pending', className: "bg-red-500  rounded mt-1 " },
                      { value: 'inprogress', label: 'In Progress', className: "bg-yellow-400 mt-1  rounded"  },
                      { value: 'finsihed', label: 'Completed', className: "bg-green-400 mt-1  rounded"},
                    ]}
              />
            )}
          />

            </div>
            <div className="mx-2 flex align-middle">
            <Controller
                name="priority"
                control={control}
                render={({ field }) => (
            <Select
            {...field}
            style={{ width: 120, borderRadius: "8px", backgroundColor: selectBgPriority, border: "none" }}
            onChange={(value)=>{
              field.onChange(value);
              handlePriority(value)
            }}
            options={[
                  { value: 'low', label: 'Low', className: "bg-green-400 mt-1  rounded" },
                  { value: 'medium', label: 'Medium ', className: "bg-yellow-400 mt-1  rounded" },
                  { value: 'high', label: 'High', className: "bg-red-500  rounded mt-1 " },
                ]}
                className="onFocus:shadow-none custom-select"
              />
              )}
              />
            </div>
            <div className="mx-5 flex align-middle">

              <InputNumber
                className="hover:border-blue-500 focus:border-blue-500 hover:border-1 focus:shadow-none"
                min={1} max={5} defaultValue={1} onChange={onChange}
              />
            </div>
            <div className="ms-2 flex align-middle focus:shadow-none">

              <Dates
                control={control}
                name="due_date"
              />
            </div>
            <div className="flex flex-col ">
        <div className=" flex  flex-col  p-[0.5rem] ">
          <InputNumber min={1} max={15} defaultValue={2} onChange={onChangeProject} />
      </div>
      </div>
            <div className="flex justify-end">
              <Button htmlType='submit' className='px-9 font-medium' >Add</Button>
            </div>
          </div>

        </form>
      </div>

    </>
  )
}

