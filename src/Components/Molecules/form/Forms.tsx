// import React from 'react';
// import {
//   Button,
//   DatePicker,
//   Form,
//   Input,
// } from 'antd';
import InputField from '../../Atoms/Input/InputField';
import TextAreas from '../../Atoms/Input/TextAreas';
import Dates from '../../Atoms/Input/Dates';


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../Pages/project/ProjectSchema';
type projectForm={
  projName:string;
  projDesc:string;
  startDate:Date;
  endDate:Date;
}

const Forms = () => {
  //Destructuring
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<projectForm>({
    defaultValues:{
      projName:"",
      projDesc:"",
      startDate,
      endDate
    },
    resolver:yupResolver(schema),
  });
  const onSuccess = () => {
    console.log("created successfully");
  };
  const { mutation } = usePostProj(onSuccess);

  const onSubmit = async (data:projectForm) => {
    // mutate trigger the mutation operation defined in your useMutation setup.
    mutation.mutate(data);
  };
  const onError = (errors:string) => {
    console.log("form Errors==>", errors);
  };
    // <Form {...formItemLayout} variant="filled" style={{maxWidth:800}}>
    //   <Form.Item  label="Project Name" name="ProjectName"
    //       wrapperCol={{ span: 24 }} rules={[{ required: true, message: 'Please input!' }]}>      <Input />
        
    //   </Form.Item>
    //   <br/>
    //   <br/>
    //   <Form.Item
    //     label="Project Description"
    //     name="ProjDesc"
    //     wrapperCol={{ span: 24 }}
    //     rules={[{ required: true, message: 'Please input!' }]}
    //   >
    //     <Input.TextArea />
    //   </Form.Item>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <Form.Item
    //     // layout='vertical'
    //     label="Start Date"
    //     name="startDate"
    //     rules={[{ required: true, message: 'Please input!' }]}
    //   >
    //     <DatePicker />
    //   </Form.Item>
    //   <br/>
    //   <Form.Item
    //     label="End Date"
    //     // layout='vertical'
    //     name="endDate"
    //     rules={[{ required: false, message: 'Please input!' }]}
    //   >
    //     <DatePicker />
    //   </Form.Item>
    //   <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
    //     <Button type="primary" htmlType="submit">
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>


    // <form onSubmit={handleSubmit(onsubmit,onError)}>
    // <label htmlFor="">Project Name</label>
    //   <InputField
    //   errors='errors.title?.message'
    //  control={control}
    //  name={name}
    //   size='large'/>
    // <label htmlFor="">Project Description</label>
    //   <TextArea/>
    // <label htmlFor="">Start Date</label>
    //   <Dates/>
    // <label htmlFor="">End Date</label>
    //   <Dates/>

    // </form>



    <form
    className=" flex-col w-96  mt-20 p-10 bg-white"
    onSubmit={handleSubmit(onSubmit, onError)}
  >
    {/* project name */}
    <div className="flex flex-col bg-white">
      <div className="flex justify-between bg-white">
        <label className="bg-white">project Name:</label>
        {/* <input
          id="project_name"
          name="project_name"
          type="text"
          className=" bg-white border-2 rounded border-black ps-2"
          {...register("project_name", {
            required: "project_name is required",
          })}
        /> */}
        <InputField
         errors='errors.title?.message'
        control={control}
        name={"projName"}
          size='large'/>

      </div>
    </div>
    <br />
    <br />

    {/* project description */}
    <div className="flex flex-col  bg-white">
      <div className="flex justify-between bg-white">
        <label className="bg-white">Description</label>
        <TextAreas/>
      </div>
    </div>
    <br />
    <br />
    

    <div className="flex flex-col justify-between bg-white ">
      <div className="flex justify-between bg-white">
        <label className="bg-white">Start Date:</label>
         <Dates/>
      </div>

    
    </div>
    <div className="flex flex-col justify-between bg-white ">
      <div className="flex justify-between bg-white">
        <label className="bg-white">End Date:</label>
         <Dates/>
      </div>
    </div>

    {/* submit button */}
    <div className="bg-white mt-10  flex justify-center">
      <button
        type="submit"
        className="bg-sky-200 px-5 py-2 rounded "
        disabled={!isValid}
      >
        SUBMIT
      </button>
    </div>
  </form>

}

export default Forms
