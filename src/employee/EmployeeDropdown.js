import React,{ useEffect, useState } from "react";
import arrowDown from '../images/down-arrow.svg';
import searchIcon from '../images/search-icon.svg';
import { getEmp } from "../apiCalls";

export default function EmployeeDropdown() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getEmpData();
    }, [])
    const getEmpData = () => {
        getEmp().then((res) => {
            setData(res.data);
        }).catch((err) => { });
    }
    const  searchEmp=(value)=>{
        if(value!=''){
            data.map((data)=>{
                if (data.FirstName.toUpperCase().includes(value.toUpperCase())) {
                    setData([data])
                }
            })
        }else{
            getEmp().then((res) => {
                setData(res.data);
            }).catch((err) => { });
        }
       
    }
    return (
        <>
            <div>
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-35 dark:bg-gray-800 my-20">
                    <p className="text-dark-blue font-medium text-24">Select employee dropdown</p>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3">
                            <label
                                className="mb-1 w-full"
                                htmlFor="grid-zip">
                                <div>
                                    <div className="relative">
                                        <div>
                                            <span id="badge-dismiss-default"
                                                className="bg-input-field h-[54px] items-center rounded-16 p-2 mr-2 select-field flex custom-cursor">
                                                <div className="avatar-group">
                                                    <div className="avatar avatar-1">
                                                        <span className="text-13">{data.length}</span>
                                                    </div>
                                                    <div className="avatar avatar-2"></div>
                                                    <div className="avatar avatar-3"></div>
                                                </div>

                                                <div className="px-2 flex justify-between w-full">
                                                    <span className="text-13 font-medium text-grey-06">Select employee</span>
                                                    <button type="button"
                                                        className="inline-flex items-center p-0.5 ml-2 bg-transparent"
                                                        data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                                                        <img src={arrowDown}
                                                            alt="arrow-down" />
                                                    </button>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute bg-mild-blue sh-blue z-40 mt-1 rounded-12 p-2 w-[26%]">
                                        <div className="relative">
                                            <input type="text" onKeyUp={(e)=>searchEmp(e.target.value)}
                                            className="w-full p-2 pl-10 text-13 text-light bg-medium-blue rounded-8 border border-transparent placeholder:text-13 placeholder:text-search-placeholder h-[48px]"
                                                placeholder="Search employee.." />
                                            <img src={searchIcon} alt="search" className="w-4 h-4 absolute left-[12px] top-[16.5px]" />
                                        </div>
                                        <ul className="w-full my-1">
                                            <li
                                                className="pr-2 py-1 relative">
                                                <div>
                                                   {data.length!=0 && data.map((res)=>{
                                                    return(
                                                        <li className="w-full inline-flex items-center px-2 mr-2 text-sm font-medium rounded">
                                                            <span className="ml-2 capitalize">
                                                            {res.FirstName}
                                                            </span>
                                                        </li>
                                                    )
                                                   })}
                                                </div>
                                            </li>
                                            {data.length==0 && <li className="pr-2 py-1 relative text-center">
                                                <span className="text-light">Not Found</span>
                                            </li>}
                                        </ul>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}