import { projects } from "~/assets/data";

const DetailProject = ({ id }) => {
 
  const projectDetail = projects.find((project) => {
    return project.id === parseInt(id);
  });
  const imageDetail = projectDetail.detailImage.map((image) => {
    console.log("Src img: " + image)
   return `<img class="w-full mt-8" src="${image}" />`
  });
  console.log(imageDetail)

  return `
    <div class="w-4/5 flex flex-col items-center justify-center m-auto pt-12">
    <div class="w-full mb-12">
    <p class="font-extrabold">
    <a href="/hanhldph.com">Project</a> > <a class="text-red-600" href="#">${projectDetail.title}</a>
    </p>
    </div>
    <h1 class ="text-center font-semibold text-xl pb-6 uppercase text-slate-800">project information</h1>
        <div class="flex w-5/6 border-2 rounded-xl shadow-lg h-auto">
            <div
                style="background-image: url('${projectDetail.image}');"
                class="w-3/6 h-auto rounded-2xl px-6 py-8 bg-no-repeat bg-cover bg-center bg-clip-content hover:scale-110 cursor-zoom-in duration-300"
            ></div>

            <div class="w-3/6 text-justify p-3 h-auto">
                <h1 onclick="return window.open('https:/github.com/luuhanh0201')" class="pb-2  cursor-pointer"><span class="font-semibold">Title: </span> <span class = "hover:text-red-600  duration-300">${projectDetail.title}</span></h1>
                <p class="text-slate-800 pb-2">
                    <span class="font-semibold">Website: </span> <a href="#"><span class = "hover:text-red-600  duration-300">${projectDetail.website}</span></a>
                </p>
                <p class="text-slate-800 pb-2">
                    <span class="font-semibold">Github: </span> <a href="#"><span class = "hover:text-red-600  duration-300">${projectDetail.github}</span></a>
                </p>
                <p class="text-slate-800 pb-2">
                    <span class="font-semibold">Technology: </span> <a href="#">${projectDetail.technology}</a>
                </p>
                <p class="text-slate-800 pb-2"><span class="font-semibold">Status:</span> ${projectDetail.status}</p>
                <div class="overflow-auto">
                    <p class="text-slate-800 pb-2 h-auto overflow-hidden">
                        <span class="font-semibold">Description: </span> ${projectDetail.description} 
                    </p>
                </div>
            </div>
        </div>
        <div class="w-full pt-12 pb-12">
            <p class="text-center font-semibold text-xl pb-6">Detail images</p>
            <div>
            ${imageDetail.join('')}
            </div>
        </div>
    </div>
  `;
};

export default DetailProject;
