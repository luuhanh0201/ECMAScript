import { projects } from "~/assets/data"

const Project = () => {

    const project = projects.map(({ id,image, status, title, description }) => {
        let classEle;
        if(status === "Doing"){
            classEle = "text-red-500"
        }else{
            classEle = "text-green-500"

        }
        return `
            <div style="width: 350px; height: 480px;" class="mb-12 overflow-hidden m-auto shadow-lg hover:shadow-red-200 rounded-3xl  transition delay-100 duration-300 ease-in-out">
                <img
                    class="w-full rounded-3xl h-1/2 hover:scale-110 transition delay-100 duration-300 ease-in-out cursor-pointer"
                    src="${image}" alt="~/assets/images/meowshop_avatar.png"
                />
                <p
                    class="select-none text-xs ${classEle} uppercase font-bold mt-6 w-11/12 m-auto mb-2"
                    title="${status}"
                >
                    ${status}
                </p>
    
                <div class="line-clamp-2 mb-4">
                    <a href="project/${id}">
                        <h3
                        class="w-11/12 m-auto cursor-pointer whitespace-wrap overflow-ellipsis font-bold hover:text-red-600 transition delay-100 duration-200 ease-in-out"
                        >
                        ${title}
                        </h3>
                    </a>
                </div>
                <div class="line-clamp-6">
                    <p class="w-11/12 m-auto whitespace-wrap overflow-ellipsis font-light text-sm">
                    ${description}
                    </p>
                </div>
            </div>
        `
    }).join("")
    return `
    <div class="w-full flex justify-center pb-52 flex-col mt-12">
        <h1>Project</h1>
        <div class="w-11/12 grid grid-cols-3 mb-12 m-auto mt-12">
                ${project}
        </div>
    </div>
    `
}
export default Project