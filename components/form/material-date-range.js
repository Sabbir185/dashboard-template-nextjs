import React, {useEffect, useRef, useState} from "react";
import {DateRangePicker} from "materialui-daterange-picker";
import moment from "moment/moment";

const MaterialDateRange = ({value, onChange, className, left, top}) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const handleChange = range => {
        onChange && onChange({
            start: moment(range.startDate),
            end: moment(range.endDate).endOf('day'),
        })
        setOpen(false)
    }
    const ref = useRef()
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);


    return (
        <div ref={ref} className={`relative ${className}`}>
            <input className="form-control bg-white"
                   value={!!value ? `${value?.start?.format('Do,MMM YYYY') || ''} - ${value?.end?.format('Do,MMM YYYY') || ''}` : undefined}
                   onClick={toggle} placeholder="Select Date" readOnly/>
            <div
                className={`${open ? 'absolute' : 'hidden'} ${left ? 'right-0 md:left-0' : 'right-0'} ${top ? 'bottom-10' : 'top-10'}`}
                style={{zIndex: 5000}}>
                <DateRangePicker
                    open={open}
                    toggle={toggle}
                    onChange={handleChange}
                />
            </div>

        </div>

    );
}

export default MaterialDateRange