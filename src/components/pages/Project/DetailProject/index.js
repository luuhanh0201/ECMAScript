import { projects } from "~/assets/data"
const DetailProject = ({id}) => {
    console.log(id)
    const projectDetail = projects.find((project)=>{
        return project.id === parseInt(id)
    })
    
    return `
    ${projectDetail.title}
    ${projectDetail.id}
    ${projectDetail.description}
    ${projectDetail.status}
    `

}
export default DetailProject