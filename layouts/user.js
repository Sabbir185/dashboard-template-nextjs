import Sidebar from "../components/dashboard/sidebar";
import Header from "../components/dashboard/header";
import {
    FaAddressBook,
    FaBraille,
    FaBuilding, FaCashRegister, FaCreditCard,
    FaDollarSign,
    FaGift,
    FaIdCard,
    FaLaptop,
    FaListUl,
    FaNewspaper,
    FaPrint,
    FaShoppingCart,
    FaStar,
    FaTh,
    FaUniversity,
    FaUsers, FaUsersCog,
    FaUserSecret,
    FaWrench
} from "react-icons/fa";
import {useEffect, useState} from "react";
import {fetchProfile} from "../helpers/backend_helper";
import {useRouter} from "next/router";
import UserContext from "../contexts/user";
import {Loader} from "../components/common/preloader";
import I18nContext, {initI18n} from "../contexts/i18n";

const UserLayout = ({children}) => {
    const router = useRouter()
    const [user, setUser] = useState()

    const i18n = initI18n()

    useEffect(() => {
        getProfile()
    }, [])


    const getProfile = () => {
        fetchProfile().then(({error, data}) => {
            if (error === false) {
                setUser({...data})
            } else {
                router.push('/login')
            }
        })
    }

    const menu = getMenu(user)

    if (!user) {
        return (
            <div className="loader block">
                <Loader/>
            </div>
        )
    }

    return (
        <I18nContext.Provider value={i18n}>
            <UserContext.Provider value={{...user, getProfile}}>
                <div className="dashboard">
                    <Sidebar menu={menu}/>
                    <Header/>
                    <div className="absolute top-0 h-32 w-full sm:bg-main"/>
                    <div className="main-content">
                        <div className="w-full sm:p-6 z-30" style={{minHeight: 400}}>
                            {children}
                        </div>
                    </div>
                </div>
            </UserContext.Provider>
        </I18nContext.Provider>

    )
}
export default UserLayout


const menu = [
    {
        label: 'Dashboard',
        icon: FaLaptop,
        href: '/admin',
        permission: 'any'
    },
    {
        label: 'Beneficiaries',
        icon: FaUsers,
        href: '/admin/beneficiaries',
        childHrefs: ['/admin/beneficiaries/[_id]', '/admin/beneficiaries/ledger/[_id]'],
        permission: 'project_beneficiary'
    },
    {
        label: 'Shops',
        icon: FaUniversity,
        href: '/admin/shops',
        childHrefs: ['/admin/shops/add', '/admin/shops/[_id]', '/admin/shops/edit/[_id]'],
        permission: 'shop_show'
    },
    {
        label: 'Categories',
        icon: FaListUl,
        href: '/admin/categories',
        childHrefs: ['/admin/categories/add', '/admin/categories/[_id]', '/admin/categories/edit/[_id]'],
        permission: 'category_show',
    },
    {
        label: 'Products',
        icon: FaGift,
        child: [
            {
                label: 'Products',
                icon: FaGift,
                href: '/admin/products',
                childHrefs: ['/admin/products/add', "/admin/products/[_id]", "/admin/products/edit/[_id]"],
                permission: "product_show"
            },
            {
                label: 'Barcode',
                icon: FaPrint,
                href: '/admin/products/barcode',
                permission: 'barcode',
            },
        ]
    },
    {
        label: 'Wholesale Market',
        icon: FaShoppingCart,
        href: '/admin/market',
        permission: "wholesale_market"
    },
    {
        label: 'POS',
        icon: FaTh,
        href: '/admin/pos',
        permission: "pos"
    },
    {
        label: 'Card Transactions',
        icon: FaNewspaper,
        href: '/admin/transactions',
        childHrefs: ['/admin/transactions/[_id]'],
        permission: "card_transactions"
    },
    {
        label: 'Stock',
        icon: FaBraille,
        href: '/admin/stock',
        permission: "pos"
    },
    {
        label: 'Credit Requests',
        icon: FaCreditCard,
        href: '/admin/credits',
        childHrefs: ['/admin/credits/[_id]'],
        permissions: ["credit_management", "credit_request"]
    },
    {
        label: 'Credit Accounts',
        icon: FaUniversity,
        href: '/admin/credits/accounts',
        childHrefs: ['/admin/credits/accounts/[_id]'],
        permissions: ["credit_management"]
    },
    {
        label: 'Order Box',
        icon: FaShoppingCart,
        href: '/admin/purchases',
        permissions: ['purchase_management', 'wholesale_market'],
        childHrefs: ['/admin/purchases/[_id]'],
    },
    {
        label: 'Card Verification & Distribution',
        icon: FaBraille,
        href: '/admin/cards',
        permission: "card_management"
    },
    // {
    //     label: 'Sale',
    //     icon: FaNewspaper,
    //     child: [
    //         {
    //             label: 'Sale',
    //             icon: FaNewspaper,
    //             href: "/admin/sales",
    //             permission: 'customer_show',
    //             childHrefs: ['/admin/customers/add', "/admin/customers/[_id]", "/admin/customers/edit/[_id]"],
    //         },
    //         {
    //             label: 'Marketing',
    //             icon: FaNewspaper,
    //             href: "/admin/deposit",
    //             permission: 'customer_show',
    //             childHrefs: ['/admin/deposit/add', "/admin/deposit/[_id]"],
    //         }
    //     ]
    // },
    {
        label: 'Projects',
        icon: FaStar,
        child: [
            {
                label: 'Relief Projects',
                icon: FaStar,
                href: "/admin/projects",
                permission: 'project_show',
                childHrefs: [
                    '/admin/projects/add',
                    "/admin/projects/[_id]",
                    "/admin/projects/edit/[_id]",
                    "/admin/projects/shops/[_id]",
                    "/admin/projects/products/[_id]",
                    "/admin/projects/beneficiaries/[_id]",
                    "/admin/projects/rounds/[project]",
                    "/admin/projects/rounds/[project]/add",
                    "/admin/projects/rounds/[project]/[_id]",
                ],
            },
        ]
    },
    {
        label: 'Customers',
        icon: FaAddressBook,
        child: [
            {
                label: 'Customers',
                icon: FaUserSecret,
                href: "/admin/customers",
                permission: 'customer_show',
                childHrefs: ['/admin/customers/add', "/admin/customers/[_id]", "/admin/customers/edit/[_id]"],
            },
            {
                label: 'Deposit',
                icon: FaDollarSign,
                href: "/admin/deposit",
                permission: 'customer_show',
                childHrefs: ['/admin/deposit/add', "/admin/deposit/[_id]"],
            }
        ]
    },
    {
        label: 'HRM',
        icon: FaIdCard,
        child: [
            {
                label: 'Roles',
                icon: FaStar,
                href: '/admin/hrm/roles',
                childHrefs: ['/admin/hrm/roles/add', "/admin/hrm/roles/[_id]"],
                permission: 'role_show'
            },
            {
                label: 'Users',
                icon: FaUsers,
                href: '/admin/hrm/users',
                childHrefs: ['/admin/hrm/users/add', "/admin/hrm/users/[_id]", "/admin/hrm/users/edit/[_id]"],
                permission: 'user_show'
            },
            {
                label: 'Companies',
                icon: FaBuilding,
                href: '/admin/hrm/companies',
                childHrefs: ['/admin/hrm/companies/add', "/admin/hrm/companies/[_id]", "/admin/hrm/companies/edit/[_id]"],
                permissions: ['company_show', 'company_product']
            },
            {
                label: 'Cards',
                icon: FaBraille,
                href: '/admin/hrm/cards',
                permission: "card_management"
            },
        ]
    },
    {
        label: 'Commissions & Fees',
        icon: FaCashRegister,
        child: [
            {
                label: 'Suppliers',
                icon: FaUsersCog,
                href: "/admin/fees/supplier",
                permission: 'commission_fees',
            },
            {
                label: 'ShopKeepers',
                icon: FaUniversity,
                href: "/admin/fees/shopkeeper",
                permission: 'commission_fees',
            }
        ]
    },
    {
        label: 'Report',
        icon: FaPrint,
        child: [
            {
                label: 'Sales Report',
                icon: FaListUl,
                href: '/admin/report/sales',
                permission: "sale_report"
            },
            {
                label: 'Purchases Report',
                icon: FaListUl,
                href: '/admin/report/purchases',
                permission: "purchase_report"
            },
            {
                label: 'Card Transaction Report',
                icon: FaListUl,
                href: '/admin/report/transactions',
                permission: "transaction_report"
            },
        ]
    },
    {
        label: 'Settings',
        icon: FaWrench,
        href: "/admin/settings",
        permission: 'site_admin',
    },
]

const getMenu = user => {
    const router = useRouter()
    const hasPermission = menu => {
        if (menu.permission && havePermission(menu.permission, user?.roles)) {
            return true
        }
        if (menu.permissions) {
            for (let permission of menu.permissions) {
                if (havePermission(permission, user?.roles)) {
                    return true
                }
            }
        }
        if (process.browser) {
            if (router?.pathname === menu.href && user) {
                router?.push('/').then(() => {
                })
            }
        }
        return false
    }
    return menu?.map(d => ({...d})).filter(menu => {
        if (+user?.profile?.is_owner === 1) {
            return true
        } else if (menu?.permission === 'any') {
            return true
        } else if (menu.permission || menu.permissions) {
            return hasPermission(menu)
        } else if (Array.isArray(menu.child)) {
            menu.child = menu.child.filter(child => {
                return hasPermission(child)
            })
            return menu.child.length > 0
        }
        return false
    })
}

export const havePermission = (permission, roles) => {
    for (let role of roles || []) {
        if (role.permissions.includes(permission)) {
            return true
        }
    }
    return false
}