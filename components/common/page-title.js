import Link from "next/link";
import Head from "next/head";
import {useSite} from "../../contexts/site";
import {useI18n} from "../../contexts/i18n";

const PageTitle = ({title, breadcrumbs = [], appTitle, hidden = false}) => {
    const i18n = useI18n()
    const site = useSite()

    return (
        <>
            <Head>
                <title>{!!i18n.t ? i18n.t(appTitle || title) : appTitle || title} | {site?.site_name}</title>
            </Head>
            <div className="bg-white px-6 py-3 rounded flex justify-between item-center shadow-sm mb-6 print-d-hidden" style={{display: hidden ? 'none': 'block'}}>
                <h1 className="text-xl font-semibold text-gray-600 tracking-wider">{!!i18n.t ? i18n.t(title) : title}</h1>
                {/*<ul className="hidden sm:block">*/}
                {/*    {breadcrumbs?.map((item, index) => (*/}
                {/*        <li key={index} className="inline-block text-sm text-gray-500">*/}
                {/*            {index + 1 < breadcrumbs?.length ? (*/}
                {/*                <Link href={item?.href || '#!'}>*/}
                {/*                    <a className="text-main">{item?.label} /&nbsp;</a>*/}
                {/*                </Link>*/}
                {/*            ) : item?.label}*/}
                {/*        </li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
            </div>
        </>
    )
}
export default PageTitle