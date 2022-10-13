import { Tooltip } from 'antd';
import moment from 'moment';
import React from 'react';
import { CSVLink } from "react-csv";
import { FiCheck, FiFileText } from 'react-icons/fi';


const CsvFile = ({ info }) => {

    const data = [
        {
            ID: `${info?.ID}`, firstname: `${info?.first_name}`, middlename: `${info?.middle_name}`,

            lastname: `${info?.last_name}`, collegeAttending: `${info?.college_university_attending ? 'Yes' : 'No'}`,

            t2202aForm: `${info?.t2202a_form}`, first_time_tax: `${info?.first_time_tax}`, ca_land_year: `${info?.ca_land_year}`,

            notice_of_assessment: `${info?.notice_of_assessment ?? ''}`, date_of_birth: `${info?.date_of_birth}`, social_insurance_no: `${info?.social_insurance_no}`,

            city: `${info?.user?.city ?? ''}`, postal_code: `${info?.user?.postal_code ?? ''}`, country: `${info?.user?.country ?? ''}`,

            assigned_accountant: `${info?.assigned_accountant?._id ? 'Yes' : 'No'}`, stripe_payment: `${info?.stripe_payment==='paid' ? 'Yes' : 'No'}`,

            lastname: `${info?.last_name}`, collegeAttending: `${info?.college_university_attending ? 'Yes' : 'No'}`,

            partner_first_name: `${info?.partner_first_name ?? ''}`, partner_last_name: `${info?.partner_last_name ?? ''}`,

            partner_dob: `${info?.partner_dob ?? ''}`, partner_sin: `${info?.partner_sin ?? ''}`,

            t4s: `${info?.t4s}`, paying_rent: `${info?.paying_rent ?? ''}`,

            last_year_rent_paid: `${info?.last_year_rent_paid ?? ''}`, recent_receipts: `${info?.recent_receipts ?? ''}`,

            time_to_call_1: `${info?.time_to_call_1 ?? ''}`, phone_number: `${info?.phone_number ?? ''}`,

            direct_deposit_form: `${info?.direct_deposit_form ?? ''}`, province_name: `${info?.province_name?.name ?? ''}`,

            marital_status: `${info?.marital_status ?? ''}`, email: `${info?.user?.email ?? ''}`, updatedAt: `${moment(info?.updatedAt).format('ll') ?? ''}`, 

        },
    ];

    const headers = [
        { label: "ID", key: "ID" },
        { label: "First Name", key: "firstname" },
        { label: "Middle Name", key: "middlename" },
        { label: "Last Name", key: "lastname" },
        { label: "College Attending", key: "collegeAttending" },
        { label: "T2202A", key: "t2202aForm" },
        { label: "First Time Tax", key: "first_time_tax" },
        { label: "Landed Year", key: "ca_land_year" },
        { label: "Notice of Assessment", key: "notice_of_assessment" },
        { label: "Date of Birth", key: "date_of_birth" },
        { label: "Social Insurance No.", key: "social_insurance_no" },
        { label: "City", key: "city" },
        { label: "Postal Code", key: "postal_code" },
        { label: "Country", key: "country" },
        { label: "Assigned Accountant", key: "assigned_accountant" },
        { label: "Payment", key: "stripe_payment" },
        { label: "Partner F Name ", key: "partner_first_name" },
        { label: "Partner L Name", key: "partner_last_name" },
        { label: "Partner DoB", key: "partner_dob" },
        { label: "Partner SIN", key: "partner_sin" },
        { label: "Work this Year", key: "this_year_jobs" },

        { label: "T4s", key: "t4s" },

        { label: "Paying Rent", key: "paying_rent" },
        { label: "Last Yr. Rent Paid", key: "last_year_rent_paid" },
        { label: "Recent Receipts", key: "recent_receipts" },
        { label: "Time to Call", key: "time_to_call_1" },
        { label: "Phone Number", key: "phone_number" },
        { label: "Direct Depsite Form", key: "direct_deposit_form" },
        { label: "Province Name", key: "province_name" },
        { label: "Marital Status", key: "marital_status" },
        { label: "Email", key: "email" },
        { label: "Last Updated", key: "updatedAt" },
    ];



    return (
        <div>
            <CSVLink data={data} headers={headers} filename='Student-Taxfile.csv'>
                <Tooltip placement="top" title="Download CSV File">
                    <span
                        className="inline-block bg-red-600 hover:bg-red-700 p-[5px] rounded-[3px] text-white cursor-pointer"
                    >
                        <FiFileText />
                    </span>
                </Tooltip>
            </CSVLink>
        </div>
    );
};

export default CsvFile;