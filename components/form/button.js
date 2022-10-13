import {initI18n} from "../../contexts/i18n";

const ButtonInput = ({value = '', options, onChange, width}) => {
    const i18n = initI18n()
    return (
        <div className="border flex rounded overflow-hidden" style={{height: 38}}>
            {options?.map((option, index) => (
                <div
                    role="button"
                    onClick={() => onChange && onChange(option.value)}
                    className={`${width ? '' : 'px-2'} flex items-center justify-center border-r last:border-0 ${option.value === value ? 'bg-main text-white' : ''}`}
                    style={{height: 38, width}}
                    key={index}>
                    {!!i18n.t ? i18n.t(option.label) : option.label}
                </div>
            ))}
        </div>
    )
}
export default ButtonInput