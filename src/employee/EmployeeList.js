import React, { useEffect, useState } from "react";
import { getEmp, deleteEmp } from "../apiCalls";
import threedots from '../img/dots.svg'
import eye from '../img/eye.svg'
import edit from '../img/edit.svg'
import deleteI from '../img/delete.svg'
import { Link  } from 'react-router-dom';

export default function EmployeeList() {
    const [data, setData] = useState([]);
    const [editId, setEditId] = useState(null);
    const [showOpt, setShowOpt] = useState(false);

    useEffect(() => {
        getEmpData();
    }, [])

    const getEmpData = () => {
        getEmp().then((res) => {
            setData(res.data);
        }).catch((err) => { });
    }

    const deleteEmploye=(id)=>{
        deleteEmp(id).then((res) => {
            getEmpData();
        }).catch(() => {})
    }

    const parseHTML = (htmlString) => {
        const parser = new DOMParser();
        const parsedDoc = parser.parseFromString(htmlString, 'text/html');
        return parsedDoc.body.textContent;
    };

    return (
        <>
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-45 font-medium text-dark-blue mt-4">Employee List</h2>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow overflow-hidden rounded-30 border border-grey-02">
                            <table className="min-w-full leading-normal bg-white">
                                <thead className="bg-white h-[90px]">
                                    <tr className="p-4 bg-white border-b border-grey-02">
                                        <th className="px-5 py-3 bg-white text-center text-20 font-medium text-navy-blue capitalize tracking-wider">Name</th>
                                        <th className="px-5 py-3 bg-white text-center text-20 font-medium text-navy-blue capitalize tracking-wider">DOB</th>
                                        <th className="px-5 py-3 bg-white text-center text-20 font-medium text-navy-blue capitalize tracking-wider">Start Date</th>
                                        <th className="px-5 py-3 bg-white text-center text-20 font-medium text-navy-blue capitalize tracking-wider">End Date</th>
                                        <th className="px-5 py-3 bg-white text-start text-20 font-medium text-navy-blue capitalize tracking-wider">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="px-10">
                                    {
                                        data.map((res, i) => {
                                            return (
                                                <tr key={i} className="p-4 h-[100px]">
                                                    <td className="px-5 py-5 border-b border-grey-02 bg-white text-13 text-grey-03 text-center font-medium capitalize">{res.FirstName}</td>
                                                    <td className="px-5 py-5 border-b border-grey-02 bg-white text-13 text-grey-03 text-center font-medium">{res.DOB}</td>
                                                    <td className="px-5 py-5 border-b border-grey-02 bg-white text-13 text-grey-03 text-center font-medium">{res.StartDate}</td>
                                                    <td className="px-5 py-5 border-b border-grey-02 bg-white text-13 text-grey-03 text-center font-medium">{res.EndDate}</td>
                                                    <td className="px-5 py-5 border-b border-grey-02 bg-white text-13 text-grey-03 text-start font-medium w-[250px]">{parseHTML(res.Description)}</td>
                                                    <td className="px-5 py-5 border-b border-grey-02 bg-white text-13 text-grey-03 text-center font-medium">
                                                        <div
                                                            onClick={() => {
                                                                setEditId(res.id);
                                                                setShowOpt(true);
                                                            }}
                                                            className="relative custom-cursor">
                                                            <img src={threedots} alt="three-dot" className="custom-cursor p-2"
                                                            />

                                                            {res.id === editId && showOpt ? (
                                                                <div
                                                                    className="absolute z-40 mt-1 rounded-6 border-1 border-grey-03 top-[-55px] right-[0]">
                                                                    <ul className="w-full my-1 border-1 border-navy-blue">
                                                                        <li
                                                                            className="text-dim-black relative custom-cursor bg-white">
                                                                            <div className="rounded-6 border-1 border-grey-04">
                                                                                <li className="w-full inline-flex rounded-t-6 items-center py-2 px-10 font-medium border border-grey-04"
                                                                                >
                                                                                    <img src={eye} alt="view-icon" className="w-3 h-3" />
                                                                                    <span className="ml-2 capitalize text-grey-05 opacity-60">
                                                                                        View
                                                                                    </span>
                                                                                </li>
                                                                                <li className="w-full inline-flex items-center py-2 px-12 text-sm font-medium border border-grey-04" >
                                                                                    <img src={edit} alt="edit-icon" className="w-3 h-3" />
                                                                                    <span className="ml-2 capitalize text-grey-05 opacity-60">
                                                                                         <Link to={`/edit-emp/${res.id}`} className="">Edit</Link>
                                                                                    </span>
                                                                                </li>
                                                                                <li className="w-full inline-flex rounded-b-6 items-center py-2 px-12 text-sm font-medium border border-grey-04"
                                                                                 onClick={()=>deleteEmploye(res.id)} >
                                                                                    <img src={deleteI} alt="delete-icon" className="w-3 h-3" />
                                                                                    <span className="ml-2 capitalize text-grey-05 opacity-60">
                                                                                        Delete
                                                                                    </span>
                                                                                </li>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            ) : null}
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
