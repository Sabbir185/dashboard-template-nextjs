import {Col, Row} from "react-bootstrap";
import FormSelect from "./select";
import {useLocations} from "../../helpers/hooks";
import {useEffect, useState} from "react";
import FormInput from "./input";

const LocationInput = ({form}) => {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const locations = useLocations()
    useEffect(() => {
        if (form) {
            window.setTimeout(() => {
                let values = form.getFieldsValue()
                if (!!values.country && !country) {
                    setCountry(values.country)
                }
                if (!!values.city && !city) {
                    setCity(values.city)
                }
            }, 2000)
        }
    }, [form])

    return (
        <>
            <Row>
                <Col md={6}>
                    <FormSelect
                        name="country"
                        label="Country"
                        onChange={setCountry}
                        options={Object.keys(locations).map(d => ({label: d, value: d}))}
                        required/>
                </Col>
                <Col md={6}>
                    <FormSelect
                        name="city"
                        label="City"
                        onChange={setCity}
                        options={Object.keys(locations).reduce((acc, key) => {
                            if (country === key) {
                                return acc.concat(Object.keys(locations[key])?.map(d => ({
                                    label: d, value: d
                                })))
                            }
                            return acc
                        }, [])}
                        required/>
                </Col>
                <Col md={6}>
                    <FormSelect
                        name="area"
                        label="Area"
                        options={Object.keys(locations).reduce((acc, key) => {
                            if (country === key) {
                                Object.keys(locations[key]).forEach(key2 => {
                                    if (city === key2) {
                                        acc = acc.concat(locations[key][key2]?.map(d => ({
                                            label: d, value: d
                                        })))
                                    }
                                })
                            }
                            return acc
                        }, [])}
                        required/>
                </Col>
                <Col md={6}>
                    <FormInput label="Street" name="street" required/>
                </Col>
                <Col md={6}>
                    <FormInput label="Building" name="building" required/>
                </Col>
                <Col md={6}>
                    <FormInput label="Door" name="door" required/>
                </Col>
            </Row>


        </>
    )
}
export default LocationInput