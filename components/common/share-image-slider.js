import { useEffect, useState } from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ShareImageSlider = ({ images, className = 'w-auto mx-auto', height = 300 }) => {
    const [current, setCurrent] = useState()

    useEffect(() => {
        if (images?.length > 0) {
            setCurrent(images[0])
        }
    }, [images])

    return (
        <>
            <div className={className}>
                <Zoom>
                    <img style={{ width: '100%', height }}
                        src={current || '/img/product.png'} alt="" />
                </Zoom>
                <div className="flex justify-center -mx-2 mt-4">
                    {images?.map((img, index) => (
                        <div className="px-2 ">
                            <img src={img} role="button" onClick={() => setCurrent(img)} alt="" key={index} className="w-20 h-20 p-2 shadow-sm" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ShareImageSlider