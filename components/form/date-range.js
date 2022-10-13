import {useEffect, useRef, useState} from "react";
import {DateRange, DefinedRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import moment from "moment"; // theme css file

const DateRangePicker = ({value, onChange, className, top = false, left = false, longTimes = false, future = false, minDate, maxDate}) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const handleChange = ({range1}) => {
        onChange({
            start: moment(range1.startDate),
            end: moment(range1.endDate).endOf('day'),
        })
        if (!moment(range1.startDate).isSame(range1.endDate)) {
            console.log(range1)
            setOpen(false)
        }
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
                   value={`${value.start?.format('Do,MMM YYYY') || 'Select Date'} - ${value.end?.format('Do,MMM YYYY') || ''}`}
                   onClick={toggle} placeholder="Select Date" readOnly/>
            <div
                className={`${open ? 'absolute' : 'hidden'} ${left ? 'right-0 md:left-0' : 'right-0'} ${top ? 'bottom-10' : 'top-10'}`}
                style={{zIndex: 5000}}>
                <div className="inline-block shadow-lg">
                    <div className="flex">
                        <DateRange
                            editableDateInputs={true}
                            onChange={handleChange}
                            minDate={minDate}
                            maxDate={maxDate}
                            moveRangeOnFirstSelection={false}
                            ranges={[{
                                startDate: value.start?._d,
                                endDate: value.end?._d
                            }]}
                        />
                        <div className="hidden md:block">
                            <DefinedRange
                                onChange={value => {
                                    setOpen(false)
                                    handleChange(value)
                                }}
                                ranges={[{
                                    start: value.start?._d,
                                    end: value.end?._d
                                }]}
                                staticRanges={longTimes ? [
                                    ...(future ? futureDates : ranges)?.map(range => ({
                                        label: range.label,
                                        range: () => ({
                                            startDate: range.range.start,
                                            endDate: range.range.end,
                                        }),
                                        isSelected(e) {
                                            let start = moment(e.start).isSame(range.range.start, 'day')
                                            let end = moment(e.end).isSame(range.range.end, 'day')
                                            return start && end;
                                        }
                                    })),
                                ] : undefined}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default DateRangePicker

const futureDates = [
    {
        label: 'Today',
        range: {
            start: moment(),
            end: moment()
        }
    },
    {
        label: 'This Week',
        range: {
            start: moment().startOf('week'),
            end: moment().endOf('week')
        }
    },
    {
        label: 'This Month',
        range: {
            start: moment().startOf('month'),
            end: moment().endOf('month')
        }
    },
    {
        label: 'Next Month',
        range: {
            start: moment().add(1, 'months').startOf('month'),
            end: moment().add(1, 'months').endOf('month')
        }
    },
    {
        label: 'This Quarter',
        range: {
            start: moment().startOf('quarter'),
            end: moment().endOf('quarter')
        }
    },
    {
        label: 'Next 3 Month',
        range: {
            start: moment().startOf('month'),
            end: moment().add(2, "months").endOf('month')
        }
    },
    {
        label: 'Next 6 Month',
        range: {
            start: moment().startOf('month'),
            end: moment().add(5, 'months').endOf('month')
        }
    },
    {
        label: 'This Year',
        range: {
            start: moment().startOf('year'),
            end: moment().endOf('year')
        }
    },
    {
        label: 'Next Year',
        range: {
            start: moment().add(1, 'years').startOf('year'),
            end: moment().add(1, 'years').endOf('year')
        }
    }
]

const ranges = [
    {
        label: 'Today',
        range: {
            start: moment(),
            end: moment()
        }
    },
    {
        label: 'This Month',
        range: {
            start: moment().startOf('month'),
            end: moment().endOf('month')
        }
    },
    {
        label: 'Last Month',
        range: {
            start: moment().subtract(1, 'months').startOf('month'),
            end: moment().subtract(1, 'months').endOf('month')
        }
    },
    {
        label: 'This Quarter',
        range: {
            start: moment().startOf('quarter'),
            end: moment().endOf('quarter')
        }
    },
    {
        label: 'Last 3 Month',
        range: {
            start: moment().subtract(2, 'months').startOf('month'),
            end: moment().endOf('month')
        }
    },
    {
        label: 'This Biannual',
        range: {
            start: moment().subtract(1, 'quarters').startOf('quarter'),
            end: moment().endOf('quarter')
        }
    },
    {
        label: 'Last 6 Month',
        range: {
            start: moment().subtract(5, 'months').startOf('month'),
            end: moment().endOf('month')
        }
    },
    {
        label: 'This Year',
        range: {
            start: moment().startOf('year'),
            end: moment().endOf('year')
        }
    },
    {
        label: 'Last Year',
        range: {
            start: moment().subtract(1, 'years').startOf('year'),
            end: moment().subtract(1, 'years').endOf('year')
        }
    }
]