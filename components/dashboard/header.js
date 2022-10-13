import {FaBars, FaGlobe, FaTh} from "react-icons/fa";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import moment from "moment";
import {useUserContext} from "../../contexts/user";
import {FiBell, FiChevronDown, FiUser} from "react-icons/fi";
import {useFetch, userOutSideClick} from "../../helpers/hooks";
import {useRouter} from "next/router";
import {useI18n} from "../../contexts/i18n";
import {NavDropdown} from "react-bootstrap";
import {fetchUnreadNotifications, postNotificationRead} from "../../helpers/backend_helper";
import {io} from "socket.io-client";

const Header = () => {
    const i18n = useI18n()
    const {permissions} = useUserContext()

    return (
        <header className="header">
            <div className="h-16 px-4 text-white flex justify-between items-center">
                <div>
                    <FaBars size={18} role="button" onClick={() => {
                        document.querySelector('.dashboard')?.classList.toggle(window.innerWidth > 1024 ? 'mini' : 'mobile')
                    }}/>
                </div>
                <div className="flex items-center">
                    <Clock/>
                    <Link href="/">
                        <a className="mx-3 text-gray-200 hover:text-white" title="Go to Frontend"><FaGlobe/></a>
                    </Link>
                    {!!permissions?.find(d => d.name === 'sale_pos') && (
                        <Link href={"/pos"}>
                            <a className="mx-3 text-gray-200 hover:text-white" title="POS"><FaTh/></a>
                        </Link>
                    )}
                    <Notifications/>
                    <NavDropdown
                        title={i18n?.languages?.find(l => l.key === i18n.lang)?.label}
                        className="language-selector"
                    >
                        {i18n?.languages?.map((l, index) => (
                            <NavDropdown.Item onClick={() => i18n.changeLang(l.key)}
                                              key={index}>{l.label}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                    <Menu/>
                </div>
            </div>
        </header>
    )
}
export default Header


const Notifications = () => {
    const ref = useRef()
    const [show, setShow] = useState(false)
    userOutSideClick(ref, () => {
        setShow(false)
    })
    const router = useRouter()
    const i18n = useI18n()
    const [notifications, getNotification] = useFetch(fetchUnreadNotifications, {}, false)

    useEffect(() => {
        getNotification()
    }, [router.pathname]);

    useEffect(() => {
        const socket = io(process.env.backend_url);
        socket.on('notifications', () => {
            getNotification()
        })
    }, [])

    return (
        <div className="relative" ref={ref}>
            <div className="flex items-center mx-1 relative" role={"button"} onClick={() => setShow(!show)}>
                {!!notifications?.totalDocs && <span
                    className="bg-red-500 absolute w-4 h-4 -top-2 -right-2 rounded-full p-0.5 text-center"
                    style={{fontSize: 10}}>{notifications.totalDocs}</span>}
                <FiBell className="" size={17}/>
            </div>
            <div
                className={`${show ? 'absolute' : 'hidden'}  ${i18n.direction === 'rtl' ? 'left-0' : 'right-0'} mt-2 max-w-lg bg-white rounded shadow-xl z-20`}>
                <h4 className="px-2 py-1 border-b mb-2">Notifications</h4>
                <div className="relative w-100 " style={{minWidth: 300}}>
                    {!!notifications?.totalDocs ? (
                        <ul>
                            {notifications?.docs?.map((d, index) => (
                                <li className="text-gray-500 px-3 pb-1 mb-2 border-b" role="button" onClick={() => {
                                    if (d?.type === 'purchase_request') {
                                        router.push('/admin/purchases/' + d.data)
                                        postNotificationRead({_id: d._id})
                                        setShow(false)
                                    }
                                    if (d?.type === 'credit_request') {
                                        router.push('/admin/credits/' + d.data)
                                        postNotificationRead({_id: d._id})
                                        setShow(false)
                                    }
                                }} key={index}>
                                    <p>{d?.message}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-gray-500 p-3 text-center">
                            <p>No Unread Notifications</p>
                        </div>
                    )}
                    <Link href="/admin/notifications">
                        <a onClick={() => setShow(false)}
                           className=" block text-gray-500 text-center text-black rounded-b p-2 pt-1">View All</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}


const Menu = () => {
    const ref = useRef()
    const user = useUserContext()
    const [show, setShow] = useState(false)
    userOutSideClick(ref, () => {
        setShow(false)
    })

    const router = useRouter()

    const NavLink = ({href, onClick, label}) => {
        if (onClick) {
            return (
                <a onClick={() => {
                    setShow(false)
                    onClick()
                }} className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-main hover:text-white">
                    {label}
                </a>
            )
        }
        return (
            <Link href={href || '#!'}>
                <a onClick={() => setShow(false)}
                   className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-main hover:text-white">
                    {label}
                </a>
            </Link>
        )
    }

    const i18n = useI18n()


    return (
        <div className="relative" ref={ref}>
            <div className="flex items-center" role={"button"} onClick={() => setShow(!show)}>
                <div className="w-7 h-7 mr-2 bg-main2 flex justify-center items-center rounded-circle overflow-hidden">
                    {user?.image ? (
                        <img src={user?.image} alt=""/>
                    ) : (
                        <FiUser/>
                    )}
                </div>
                <span className="hidden sm:block">{user?.first_name} {user?.last_name}</span>
                <FiChevronDown className="mt-1.5 ml-1"/>
            </div>
            <div
                className={`${show ? 'absolute' : 'hidden'}  ${i18n.direction === 'rtl' ? 'left-0' : 'right-0'} mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20`}>
                <NavLink label="Your Profile" href="/admin/profile"/>
                <a onClick={() => {
                    localStorage.removeItem('authToken')
                    return router.push('/login')
                }}
                   className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-main hover:text-white">
                    Sign Out
                </a>
            </div>
        </div>
    )
}

const Clock = () => {
    const [time, setTime] = useState(moment());
    useEffect(() => {
        const interval = setInterval(() => setTime(moment()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <p className="mb-0 text-sm hidden sm:block font-medium">{time?.format('dd MMM YYYY, hh:mm:ss A')}</p>
    )
}