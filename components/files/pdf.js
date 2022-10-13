import React from "react";
import {
    Document,
    Text,
    Page,
    View,
    Image,
    StyleSheet,
    Link,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import moment from "moment";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#CD1E05",
        color: "#fff",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "10px",
        paddingBottom: "10px",
    },
    header_top_flex: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "5px",
        fontSize: "14px",
    },
});

function capitalizeFirstLetter(string) {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}


// Create Document Component
const MyPdfDocument = ({ data, getSiteData={} }) => {


    return (
        <Document>
            <Page size="A4">
                <View>
                    {/* header part */}
                    <View style={styles.page}>
                        <View style={styles.header_top_flex}>
                            <Text>{data?.first_name +" "+ data?.last_name +" "+ data?.last_name}</Text>
                            <Text>{getSiteData?.username}</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                fontSize: "13px",
                                paddingTop: "15px",
                            }}
                        >
                            <Text>{data?.province_name?.name}</Text>
                            <Text>{getSiteData?.website}</Text>
                        </View>

                        {/* logo */}
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                            }}
                        >
                            <Image
                                src='/logo.png'
                                alt=""
                                style={{ width: "70px" }}
                            />
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                fontSize: "10px",
                                paddingTop: "13px",
                            }}
                        >
                            <View
                                style={{
                                    lineHeight: 1.5,
                                    marginTop: "16px",
                                }}
                            >
                                <Text>Submission Date : {moment(data?.createdAt).format('ll')}</Text>
                                <Text>Payment Status : {capitalizeFirstLetter(data?.stripe_payment)}</Text>
                                <Text>Email : {data?.user?.email ?? 'N/A'}</Text>
                            </View>

                            <View
                                style={{
                                    lineHeight: 1.5,
                                    marginTop: "16px",
                                    textAlign: "end",
                                    fontSize: "10px",
                                }}
                            >
                                <Text>Westwood Square, 205 Goreway Dr,</Text>
                                <Text>Mississauga,7 Ontario L4T 2V1,</Text>
                                <Text>Canada</Text>
                            </View>
                        </View>
                    </View>

                    {/* data container */}
                    <View
                        className="px-3 my-4"
                        style={{
                            paddingLeft: "12px",
                            paddingRight: "12px",
                            marginTop: "16px",
                            marginBottom: "16px",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: "15px",
                                marginTop: "21px",
                                marginBottom: "15px",
                            }}
                        >
                            Student Tax File #{data?.ID}
                        </Text>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                fontSize: "12px",
                            }}
                        >
                            {/* left side code */}
                            <View
                                style={{
                                    width: 250,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",

                                        paddingLeft: "8px",
                                        paddingRight: "8px",

                                        paddingTop: "4px",
                                        paddingBottom: "4px",

                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>ID</Text>
                                    <Text></Text>
                                    <Text>{data?.ID}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",

                                        paddingTop: "4px",
                                        paddingBottom: "4px",

                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>First Name</Text>
                                    <Text></Text>
                                    <Text>{data?.first_name}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Middle Name</Text>
                                    <Text></Text>
                                    <Text>{data?.middle_name}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Last Name</Text>
                                    <Text></Text>
                                    <Text>{data?.last_name}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>College Attending</Text>
                                    <Text></Text>
                                    <Text>{data?.college_university_attending? 'Yes': 'No'}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>T2202A</Text>
                                    <Text></Text>
                                    <Link style={{ color: "#CD0592", textDecoration: 'none' }} href={data?.t2202a_form}>
                                        view
                                    </Link>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>First Time Tax</Text>
                                    <Text></Text>
                                    <Text>{data?.first_time_tax? 'Yes': 'No'}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Landed Year</Text>
                                    <Text></Text>
                                    <Text>{data?.ca_land_year}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Notice Of Assessment</Text>
                                    <Text></Text>
                                    <Link style={{ color: "#CD0592", textDecoration: 'none' }} href={data?.notice_of_assessment ?? ''}>
                                        view
                                    </Link>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Date Of Birth</Text>
                                    <Text></Text>
                                    <Text>{data?.date_of_birth}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Social Insurance No.</Text>
                                    <Text></Text>
                                    <Text>{data?.social_insurance_no}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Address</Text>
                                    <Text></Text>
                                    <Text>{data?.address}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>City</Text>
                                    <Text></Text>
                                    <Text>{data?.user?.city}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Postal Code</Text>
                                    <Text></Text>
                                    <Text>{data?.postal_code ?? ''}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Province</Text>
                                    <Text></Text>
                                    <Text>{data?.province_name?.name}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Assigned</Text>
                                    <Text></Text>
                                    <Text>{data?.assigned_accountant?._id ? 'Yes' : 'No'}</Text>
                                </View>
                            </View>

                            {/* right side code */}
                            <View
                                style={{
                                    width: 250,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",

                                        paddingTop: "4px",
                                        paddingBottom: "4px",

                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Payment</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {data?.stripe_payment === 'paid' ? 'Yes' : 'No'}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Marital Status</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {data?.marital_status}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Partner F Name</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {data?.partner_first_name}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Partner L Name</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {data?.partner_last_name}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Partner Dob</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {data?.partner_dob}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Partner SIN</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {data?.partner_sin}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Work This Year</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {data?.this_year_jobs}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>T4s</Text>
                                    <Text style={{ paddingRight: "4px", }}>
                                        {data?.t4s?.map((data, i) => (
                                            <Text
                                                key={i}
                                            >
                                                <Link
                                                    style={{ color: "#CD0592", textDecoration: 'none' }}
                                                    href={`${data}`}
                                                >
                                                    <Text style={{ marginLeft: "4px" }}> view</Text>
                                                </Link>
                                            </Text>
                                        ))}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Paying Rent</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {data?.paying_rent ?? ''}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Last Yr. Rent paid</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {data?.last_year_rent_paid ?? ''}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Rent Receipts</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {data?.rent_receipts}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Time To Call</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {data?.time_to_call_1}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Phone Number</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {data?.phone_number}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Digital Signature</Text>
                                    <Link style={{ color: "#CD0592", textDecoration: 'none' }} href={data?.digital_signature}>
                                        view
                                    </Link>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",

                                        paddingTop: "4px",
                                        paddingBottom: "4px",

                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Direct Deposit Form</Text>
                                    <Link style={{ color: "#CD0592", textDecoration: 'none' }} href={data?.direct_deposit_form}>
                                        view
                                    </Link>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Last Updated</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {moment(data?.updatedAt).format('ll')}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* footer */}
                    <View
                        style={{
                            backgroundColor: "#CD1E05",
                            color: "#fff",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            flexDirection: 'row',
                            justifyContent: "space-around",
                            marginTop: 80,
                            fontSize: '14px'
                        }}
                    >
                        <Text>© {new Date().getFullYear()} {capitalizeFirstLetter(getSiteData?.username)} - All Rights Reserved.</Text>
                        <Text>Let us File your Tax!</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};


export default MyPdfDocument;