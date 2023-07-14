import React, { useEffect, useState } from "react";
import { getEmp, registerEmp, deleteEmp, updateEmp } from "../apiCalls";
import { useNavigate, useParams  } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function EmployeeForm() {
    const { id } = useParams();
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [dob, setdob] = useState("");
    const [study, setstudy] = useState("");
    const [start_date, setstart_date] = useState("");
    const [end_date, setend_date] = useState("");
    const [current_salary, setcurrent_salary] = useState("");
    const [discription, setdiscription] = useState("");
    const [registrationDone, setRegistrationDone] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if(id){
            getEmp().then((res) => {
                res.data.map((result)=>{
                    if(result.id == id){
                        setTheData(result);
                    }
                })
            }).catch((err) => { });
        }
    },[])
    
    const setTheData=(result) => {
        setfirst_name(result.FirstName);
        setlast_name(result.LastName);
        setdob(result.DOB);
        setstudy(result.Study);
        setstart_date(result.StartDate);
        setend_date(result.EndDate);
        setcurrent_salary(result.CurrentSalary);
        setdiscription(result.Description);
    };
    const navigate = useNavigate();

    const modules = {
        toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ align: "" }, { align: "center" }, { align: "right" }, { align: "justify" }],
        ],
    };

    const Editorvalue = (value) => {
        setdiscription(value);
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        let userdata ={
            FirstName:first_name,
            LastName:last_name,
            DOB:dob,
            Study:study,
            StartDate:start_date,
            EndDate:end_date,
            CurrentSalary:current_salary,
            Description:discription,
        }
        if(id){
            updateEmp(id,userdata).then((res) => {
                setRegistrationDone(true)
                setLoading(true)
                setTimeout(() => {
                    navigate('/emp/list');
                }, 3000);
              })
              .catch((err) => {
                  console.log(err);
              });
        }else{
            registerEmp(userdata).then((res) => {
                setRegistrationDone(true)
                setLoading(true)
                setTimeout(() => {
                    navigate('/emp/list');
                }, 3000);
            })
            .catch((err) => {
                console.log(err);
            });
        }
          
    }
    

   

    return (
        <>
            <div>
            {id ? <p className="text-45 font-bold text-dark-blue text-center mt-4">Update Employee</p>:
                <p className="text-45 font-bold text-dark-blue text-center mt-4">Employee  Registration  Form</p>}
                <section className="max-w-4xl p-6 mx-auto bg-white shadow-sh-gray rounded-35 dark:bg-gray-800 my-20">
                    <form className="lg:mx-28 mt-28 mb-20" onSubmit={handleSubmit}>
                        <div className="">
                            <div className="-mx-3 md:flex mb-10">
                                <div className="md:w-1/2 px-3">
                                    <label className="flex text-13 text-navy-blue font-medium dark:text-gray-200 ml-2 mb-[19px]" htmlFor="first_name">First Name*</label>
                                    <input id="first_name" type="text" placeholder="Enter your first name" value={first_name} onChange={(e)=>setfirst_name(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-input-field border border-transparent rounded-16 placeholder:text-grey-03" />
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <label className="flex text-13 text-navy-blue font-medium dark:text-gray-200 ml-2 mb-[19px]" htmlFor="last_name">Last Name*</label>
                                    <input id="lastt_name" type="text" placeholder="Enter your last name" value={last_name} onChange={(e)=>setlast_name(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-input-field border border-transparent rounded-16 placeholder:text-grey-03" />
                                </div>
                            </div>
                            <div className="md:full mb-10">
                                <label className="flex text-13 text-navy-blue font-medium dark:text-gray-200 ml-2 mb-[19px]" htmlFor="dob">DOB</label>
                                <input id="dob" type="date" placeholder="Enter your dob" value={dob} onChange={(e)=>setdob(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-input-field border border-transparent rounded-16 placeholder:text-grey-03 custom-cursor" />
                            </div>
                            <div className="md:full mb-10">
                                <label className="flex text-13 text-navy-blue font-medium dark:text-gray-200 ml-2 mb-[19px]" htmlFor="study">Study</label>
                                <select value={study} onChange={(e)=>setstudy(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-input-field border border-transparent rounded-16 placeholder:text-grey-03 select-arrow custom-cursor">
                                    <option>B.E</option>
                                    <option>MBA</option>
                                    <option>M.E</option>
                                    <option>BCA</option>
                                </select>
                            </div>
                            <div className="-mx-3 md:flex mb-10">
                                <div className="md:w-1/2 px-3">
                                    <label className="flex text-13 text-navy-blue font-medium dark:text-gray-200 ml-2 mb-[19px]" htmlFor="start_date">Start Date*</label>
                                    <input id="start_date" type="date" placeholder="Enter your first name" value={start_date} onChange={(e)=>setstart_date(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-input-field border border-transparent rounded-16 placeholder:text-grey-03 custom-cursor" />
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <label className="flex text-13 text-navy-blue font-medium dark:text-gray-200 ml-2 mb-[19px]" htmlFor="end_date">End Date*</label>
                                    <input id="end_date" type="date" placeholder="Enter your last name" value={end_date} onChange={(e)=>setend_date(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-input-field border border-transparent rounded-16 placeholder:text-grey-03 custom-cursor" />
                                </div>
                            </div>
                            <div className="md:w-full mb-10">
                                <label className="flex text-13 text-navy-blue font-medium dark:text-gray-200 ml-2 mb-[19px]" htmlFor="current_salary">Current Salary*</label>
                                <input id="current_salary" type="text" placeholder="Enter your current salary" value={current_salary} onChange={(e)=>setcurrent_salary(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-input-field border border-transparent rounded-16 placeholder:text-grey-03" />
                            </div>
                            <div className="md:w-full">
                                <label className="flex text-13 text-navy-blue font-medium dark:text-gray-200 ml-2 mb-[19px]" htmlFor="description">Description*</label>
                                <div className="editor-div">
                                    <div id="editor-card-body">
                                        <ReactQuill
                                            value={discription} onChange={Editorvalue}
                                            name="body" modules={modules} theme="snow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {registrationDone && <div className="flex bg-green-100 rounded-lg p-4 mt-8 text-sm  border border-green-300" role="alert">
                            <div className="text-center w-full">
                                <span className="font-medium text-green-700">{!id ? 'Registration Successfull !!':'Update Successfull !!' }</span>
                            </div>
                        </div>}
                        <div className="-mx-3 md:flex mt-4">
                            <div className="md:w-full px-3">
                                <button type="button"
                                    className="items-center w-full bg-gr mt-5 h-[69px] py-2 rounded-13 text-mild-black bg-grey-01 font-bold mb-2 text-18 custom-cursor">
                                    Cancel
                                </button>
                            </div>
                            <div className="md:w-full px-3">
                                <button type="submit"
                                    className="items-center w-full bg-white mt-5 h-[69px] py-2 border border-mild-blue rounded-13 text-mild-blue font-bold mb-2 text-18 custom-cursor">
                                    {!loading && <span className='indicator-label font-roboto-bold'>Save</span>}
                                    {loading && (
                                        <span className='indicator-progress' style={{ display: 'block' }}>
                                            Saving...
                                            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}