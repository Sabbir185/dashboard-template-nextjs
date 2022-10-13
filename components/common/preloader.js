import {useEffect} from "react";

const RouteLoader = () => {
    const hide = () => {
        hideLoader()
    }

    useEffect(() => {
        hide()
    }, [])


    return (
        <div className="loader" id="main-loader">
            <Loader/>
        </div>
    )
}
export default RouteLoader

export const showLoader = () => {
    try {
        document.querySelector('#main-loader').style.visibility = 'visible'
    } catch (e) {

    }
}

export const hideLoader = () => {
    try {
        document.querySelector('#main-loader').style.visibility = 'hidden'
    } catch (e) {

    }
}

export const Loader = () => {
    return (
        <div className="loading">
        </div>
    )
}