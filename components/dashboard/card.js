 const DashboardCard = ({icon: Icon, label, description}) => {
    return (
        <div className="bg-white p-4 rounded shadow-sm flex justify-between items-end mb-4">
            <div>
                <h5 className="text-gray-600 text-sm mb-1.5">{label}</h5>
                <h2 className="text-main text-2xl font-semibold">{description}</h2>
            </div>
            <Icon size={32} className="text-gray-400"/>

        </div>
    )
}
export default DashboardCard