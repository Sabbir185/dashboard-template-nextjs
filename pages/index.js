import HomeLayout from "../layouts/home";
import {useSite} from "../contexts/site";
import Link from "next/link";
import Head from "next/head";


export default function Home() {
    const settings = useSite()

    return (
        <div>
            <Head>
                <title>{settings?.site_name}</title>
            </Head>

            <div>
                <h4 className="text-center mt-[10%] text-purple-500">Welcome</h4>
                <h5 className='text-center'>NextJs Template</h5>
            </div>
        </div>
    )
}
