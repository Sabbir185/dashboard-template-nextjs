import {useI18n} from "../../contexts/i18n";

const Button = ({children, className, ...props}) => {
    const i18n = useI18n()
    return (
        <button {...props}
                className={`bg-main px-4 py-2.5 text-sm text-white rounded font-medium text-wra hover:bg-main2 ${className}`}
                style={{whiteSpace: 'nowrap'}}>{!!i18n.t && typeof children === 'string' ? i18n.t(children) : children}</button>
    )
}
export default Button