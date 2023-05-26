import { projects } from "~/assets/data"

const Project = () => {

    const project = projects.map(({ id, image, status, title, description }) => {
        let classEle;
        if (status === "Doing") {
            classEle = "text-red-500"
        } else {
            classEle = "text-green-500"

        }
        return `
        <div
            style="height: 300px; margin-top: 20px"
            class="flex justify-between w-3/5 mb-12 overflow-hidden m-auto shadow-lg hover:shadow-red-200 rounded-2xl transition delay-100 duration-300 ease-in-out border border-slate-300 "
        >
            <div style="background-image: url('${image}');" class="w-3/6 h-full rounded-2xl p-6 bg-no-repeat bg-cover bg-center bg-clip-content ">
            </div>

            <div class="flex flex-col justify-center items-center w-3/6 p-8">
                <div class="h-2/4">
                    <a href="/project/${id}">
                    <h1 class="text-center mb-4 text-lg font-black line-clamp-1">${title} (<span class ="${classEle}">${status}</span>)</h1></a>
                    
                    <p class="line-clamp-3 text-center text-slate-400 text-base">
                       ${description}
                    </p>
                </div>
                <div class="h-2/4 flex flex-col items-center justify-center">
                    <div class="h-1/2 flex items-center justify-center text-4xl">
                        <button>
                            <i
                                class="animate-spin duration-3000 hover:scale-110 cursor-pointer fa-brands fa-react mr-6"
                                style="color: #3a88ee"
                            ></i>
                        </button>
                        <button>
                            <i class="hover:scale-110 cursor-pointer fa-brands fa-sass mr-6" style="color: #cc5514"></i>
                        </button>
                    </div>
                    <div class="h-1/2 flex items-center justify-center">
                        <a
                            href="#"
                            class="font-semibold p-2 mr-4 shadow-lg shadow-slate-300/50 border border-slate-300 hover:bg-red-600/80 duration-300"
                            >Code <i class="fa-brands fa-github"></i
                        ></a>
                        <a
                            href="#"
                            class="font-semibold p-2 mr-4 shadow-lg shadow-slate-300/50 border border-slate-300 hover:bg-red-600/80 duration-300"
                            >Live Demo <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i
                        ></a>
                    </div>
                </div>
            </div>
        </div>

        
        `
    }).join("")
    return `
        <div class="w-11/12 m-auto pt-12 pl-28 pb-6">
            <h1 class="text-lg font-black">My projects <i class="fa-solid fa-diagram-project" style="color: #db2929;"></i></h1>
        </div>
                ${project}
    `
}
export default Project