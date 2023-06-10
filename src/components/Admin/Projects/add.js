import HeaderAdmin from "~/components/Admin/Header"
const AddProject = () => {


    return `
    ${HeaderAdmin()}
    <div class="container mx-auto mt-8">
            <div class="p-4 bg-white rounded shadow w-10/12 mx-auto">
                <h1 class="text-2xl font-bold mb-4 text-center">ADD PROJECTS</h1>
                <form class="mb-4">
                    <div class="mb-4">
                        <label class="block font-bold mb-2" for="title">Title</label>
                        <input
                            class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-500"
                            id="title"
                            type="text"
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-2" for="image">Image</label>
                        <input
                            class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-500 cursor-pointer"
                            id="detailImage"
                            type="file"
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-2" for="detailImage">Detail Image</label>
                        <input
                            class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-500 cursor-pointer"
                            id="detailImage"
                            type="file"
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-2" for="technology">Technology</label>
                        <input
                            class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-500"
                            id="technology"
                            type="text"
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-2" for="github">GitHub</label>
                        <input
                            class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-500"
                            id="github"
                            type="text"
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-2" for="website">Website</label>
                        <input
                            class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-500"
                            id="website"
                            type="text"
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-2" for="status">Status</label>
                        <div class="flex">
                            <label class="inline-flex items-center mr-4">
                                <input class="form-radio text-blue-500" type="radio" name="status" value="done" />
                                <span class="ml-2">Done</span>
                            </label>
                            <label class="inline-flex items-center">
                                <input class="form-radio text-blue-500" type="radio" name="status" value="doing" />
                                <span class="ml-2">Doing</span>
                            </label>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="block font-bold mb-2" for="description">Description</label>
                        <textarea
                            class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-500"
                            id="description"
                            rows="4"
                        ></textarea>
                    </div>

                    <div class="text-right">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" id="add-project">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `
}
export default AddProject