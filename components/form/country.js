import {Form} from "antd";
import {CountryDropdown, RegionDropdown} from "react-country-region-selector";
import {initI18n} from "../../contexts/i18n";

const CountryInput = ({name = 'country', label = 'Country', setCountry, whitelist, required}) => {
    const i18n = initI18n()
    return (
        <Form.Item
            name={name}
            label={!!i18n.t ? i18n.t(label) : label}
            rules={[
                {required: required , message: "Please provide country"},
            ]}
            initialValue="">
            <CountryDropdown valueType="full" whitelist={whitelist} onChange={val => setCountry && setCountry(val)} className="form-input"/>
        </Form.Item>
    )
}
export default CountryInput

export const CityInput = ({name = 'city', label = 'City', country, required}) => {
    const i18n = initI18n()
    return (
        <Form.Item
            name={name}
            label={!!i18n.t ? i18n.t(label) : label}
            rules={[
                {required: required , message: "Please provide country"},
            ]}
            initialValue="">
            <RegionDropdown valueType="full" country={country} countryValueType="full" className="form-input"/>
        </Form.Item>
    )
}