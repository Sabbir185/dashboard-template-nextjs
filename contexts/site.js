import {createContext, useContext} from "react"
const SiteContext = createContext({})
export const useSite = () => useContext(SiteContext)
export default SiteContext