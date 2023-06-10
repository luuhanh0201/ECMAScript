import Header from "~/components/DefaultLayout/Header"
import Footer from "~/components/DefaultLayout/Footer"

const Component = (content)=>{
    return `
    ${Header}
    ${content}
    ${Footer}
    `
}
export default Component