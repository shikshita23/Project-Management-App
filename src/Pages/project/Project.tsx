import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './ProjectSchema';
import InputField from '../../Components/Atoms/Input/InputField';
import TextAreas from '../../Components/Atoms/Input/TextAreas';
import Dates from '../../Components/Atoms/Input/Dates';
import { usePostProj } from './common/usePostProj';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import Projects from "../../Theme/Css/Project.css";
type ProjectForm = {
  project_name: string;
  project_description: string;
  start_date: Date | null; 
  end_date: Date | null;   
};

const Project = () => {
  const { control, handleSubmit } = useForm<ProjectForm>({
    defaultValues: {
      project_name:"",
      project_description:"",
      start_date:null,
      end_date:null
    },
    resolver: yupResolver(schema),
  });

  const onSuccess = () => {
    console.log('created successfully');
  };

  const { mutation } = usePostProj(onSuccess);

  const onSubmit = async (data: ProjectForm) => {
    const formattedData = {
      ...data,
      start_date: data.start_date ? data.start_date.toISOString().split('T')[0] : '', // Convert to yyyy-mm-dd
      end_date: data.end_date ? data.end_date.toISOString().split('T')[0] : ''     // Convert to yyyy-mm-dd
    };
    console.log('formattedData', formattedData);
    mutation.mutate(formattedData);
  };

  return (
    <div className='flex justify-center relative'>
      <div className='absolute top-[25px] left-[80px] flex w-[65px] h-[65px] justify-center items-center rounded bg-zinc-300	'>
        <FontAwesomeIcon icon={faCalendar} className='w-[25px] h-[25px] '/>
      </div>
    <form
      className="flex-col w-full mt-10 p-10 ps-[70px] justify-center bg-white shadow-xl rounded"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="text-2xl font-bold text-center mb-5 absolute top-[65px] left-[165px]">New Project</div>
      <div className="flex flex-col ">
        <div className=" items-center justify-between   p-[0.5rem] mt-[65px] relative">
          {/* <label className="inline w-[8rem] focus:absolute top-30">Project Name:</label> */}
          <InputField
            control={control}
            name="project_name"
            type="text"
            size="large" 
            className="mt-5 border-0 border-b-2 border-gray-200  hover:border-red-500 rounded-none focus:placeholder-transparent " 
            placeholder='Project Name' 
          />
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col ">
        <div className="items-center justify-between  p-[0.5rem] ">
          <label className="inline w-[8rem] ">Project Description:</label>
          <TextAreas
            control={control}
            name="project_description"
            row={3}
          />
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col ">
        <div className="flex items-center justify-between w-[30rem] p-[0.5rem] ">
          <label className="inline w-[8rem]">Start Date:</label>
          <Dates
            control={control}
            name="start_date"
          />
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col ">
        <div className="flex items-center justify-between w-[30rem] p-[0.5rem]">
          <label className="inline w-[8rem]">End Date:</label>
          <Dates
            control={control}
            name="end_date"
          />
        </div>
      </div>
      <br />
      <br />
      <Button  htmlType='submit' className='m-auto'>Create</Button>

    </form>
    </div>
  );
};

export default Project;
