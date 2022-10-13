import { useEffect } from "react";
import { useState } from "react";
import ExportExcel from "./exportExcel";


export default function FileExportHome({ finalData, action = false, allFile = false, titleAll = null, downloadAll = false }) {
    let [finalDataDetail, setFinalDataDetail] = useState([]);
    let [rowData, setRowData] = useState([]);

    useEffect(() => {
        if (finalData?.length >= 1) {
            setFinalDataDetail(finalData)
            setRowData(finalData)
        } else {
            setFinalDataDetail([finalData])
            setRowData([finalData])
        }
    }, [finalData])


    finalDataDetail = finalDataDetail?.map((data, i) => {
        const res = {
            category: `${data?.first_name} ${data?.last_name} ${i}`,
            data: [

                {
                    A: "Sin",
                    B: `${data?.partner_sin ?? ""}`,
                    C: "Marital Status",
                    D: `${data?.marital_status ?? ""}`,
                },




                {
                    A: "Username",
                    B: `${data?.user?.username ?? ""}`,
                    C: "Partner sin",
                    D: `${data?.partner_sin ?? ""}`,
                },



                {
                    A: "First Name",
                    B: `${data?.first_name}`,
                    C: "Partner Fist Name",
                    D: `${data?.partner_first_name ?? ""}`,
                },



                {
                    A: "Last Name",
                    B: `${data?.last_name ?? ""}`,
                    C: "Partner sin",
                    D: `${data?.partner_last_name ?? ""}`,
                },


                {
                    A: "Email",
                    B: `${data?.user?.email ?? ""}`,
                    C: "Province Name",
                    D: `${data?.province?.name ?? ""}`,
                },
                {
                    A: "Street Address",
                    B: `${data?.address ?? ""}`,
                    C: "When did you land in Canada?",
                    D: `${data?.ca_land_year ?? ""}`,
                },
                {
                    A: "First Time Tax",
                    B: `${data?.first_time_tax ? "Yes" : 'No'}`,
                },
                {
                    A: "City",
                    B: `${data?.user?.city ?? ""}`,
                },
                {
                    A: "Postal Code",
                    B: `${data?.user?.postal_code ?? ""}`,
                },
                {
                    A: "Home Phone",
                    B: `${data?.phone_number ?? ""}`,
                },
                {
                    A: "Birth Date",
                    B: `${data?.date_of_birth ?? ""}`,
                },
                {
                    A: "Gender",
                    B: `${data?.Gender ?? ""}`,
                },

                { A: "Rental Information" },

                {
                    A: "Address",
                    B: `${data?.address ?? ""}`,
                },

                { A: "Educational Information" },

                {
                    A: "Name of College",
                    B: `${data?.institution_name ?? ""}`,
                },
                {
                    A: "T2202A",
                    B: `${data?.t2202a_form ?? ""}`,
                },
                {
                    A: "Link to the attached T2202A forms",
                    B: ``,
                },
                {
                    A: "Notice Of Assessment",
                    B: `${data?.notice_of_assessment ?? ""}`,
                },
                {
                    A: "Income prior to coming to Canada?",
                    B: `${data?.income_in_cad_dollar ?? ""}`,
                },
                {
                    A: "Direct Deposit",
                    B: `${data?.direct_deposit_form ?? ""}`,
                },
                {
                    A: "Best Time To Call",
                    B: ``,
                },
                {
                    A: "Payment Status",
                    B: `${data?.stripe_payment ? "succeeded" : 'Pending'}`,
                },
                {
                    A: "Coupon Code Used",
                    B: `${data?.coupon_code_user ?? ""}`,
                },
                {
                    A: "Student ID",
                    B: `${data?.profile_image ?? ""}`,
                },


                { A: "" },


                {
                    A: "T4",
                    B: `${data?.t4s ?? ""}`,
                },
                {
                    A: "Link to the attached T4 forms",
                    B: ``,
                },
            ]
        }

        return res
    })


    return (
        <div>
            <ExportExcel finalDataDetail={finalDataDetail} action={action} allFile={allFile} titleAll={titleAll} downloadAll={downloadAll} rowData={rowData}/>
        </div>
    );
}
