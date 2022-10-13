import dynamic from "next/dynamic";

const Chart = dynamic(() => import('./chart'), {ssr: false})

const ApexChart = ({...props}) => {
    return <Chart {...props}/>
}
export default ApexChart