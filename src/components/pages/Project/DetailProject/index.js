import { projects } from "~/assets/data";

const DetailProject = ({ id }) => {
  console.log(id);
  const projectDetail = projects.find((project) => {
    return project.id === parseInt(id);
  });
  const imageDetail = projectDetail.detailImage.map((image) => {
   return `<img class="w-full" src="${image}" />`
  });

  return `
    <div class="w-4/5 flex flex-col items-center justify-center m-auto pt-12">
        <div class="w-full mb-12">
            <p class="font-extrabold">
                <a href="/project">Project</a> > <a class="text-red-600" href="#">${projectDetail.title}</a>
            </p>
        </div>
        <div class="flex w-2/3 border-2 rounded-xl shadow-lg">
            <div
                style="background-image: url('${projectDetail.image}');"
                class="w-3/6 h-auto rounded-2xl p-6 bg-no-repeat bg-cover bg-center bg-clip-content"
            ></div>

            <div class="w-3/6 text-justify p-3 h-auto">
                <h1 class="pb-2"><span class="font-semibold">Title: </span> ${projectDetail.title} </h1>
                <p class="text-slate-800 pb-2">
                    <span class="font-semibold">Website: </span> <a href="#">${projectDetail.website}</a>
                </p>
                <p class="text-slate-800 pb-2">
                    <span class="font-semibold">Github: </span> <a href="#">${projectDetail.github}</a>
                </p>
                <p class="text-slate-800 pb-2">
                    <span class="font-semibold">Technology: </span> <a href="#">${projectDetail.technology}</a>
                </p>
                <p class="text-slate-800 pb-2"><span class="font-semibold">Status:</span> ${projectDetail.status}</p>
                <div class="overflow-auto">
                    <p class="text-slate-800 pb-2 max-h-28 overflow-hidden">
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
