import HeaderAdmin from "~/components/Admin/Header"
import { API_URL } from "~/assets/data"
import { useState, useEffect } from "~/lib"
const Project = () => {
    const [projects, setProject] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/projects`)
            .then(response => response.json())
            .then(projects => setProject(projects))
    }, [])

    return `
    ${HeaderAdmin()}
    <div class="container mx-auto py-8">
            <h1 class="text-2xl font-bold mb-4 text-center">Admin - Project List</h1>
            <table class="min-w-full border border-gray-300">
                <thead>
                    <tr>
                        <th class="px-4 py-2 border-b border-r">Title</th>
                        <th class="px-4 py-2 border-b border-r">Image</th>
                        <th class="px-4 py-2 border-b border-r">Technology</th>
                        <th class="px-4 py-2 border-b border-r">GitHub</th>
                        <th class="px-4 py-2 border-b border-r">Website</th>
                        <th class="px-4 py-2 border-b border-r">Status</th>
                        <th class="px-4 py-2 border-b border-r">Description</th>
                        <th class="px-4 py-2 border-b border-r">Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${projects.map(({ title, image, technology, github, website, status, description }) => {
        return `
                        <tr>
                        <td class="px-4 py-2 border-b border-r">${title}</td>
                        <td class="px-4 py-2 border-b border-r">
                            <img src="${image}" alt="Project 1" class="w-20 h-20" />
                        </td>
                        <td class="px-4 py-2 border-b border-r">${technology}</td>
                        <td class="px-4 py-2 border-b border-r">
                            <a href="${github}"
                                >Github</a
                            >
                        </td>
                        <td class="px-4 py-2 border-b border-r">
                            <a href="${website}"
                                >Website</a
                            >
                        </td>
                        <td class="px-4 py-2 border-b border-r">${status}</td>
                        <td class="px-4 py-2 border-b border-r">${description}</td>
                        <td class="border-b border-r text-center px-2 py-0">
                            <a
                                href="/admin/projects/edit/1"
                                class="mb-3 text-white bg-green-500 hover:bg-green-600 border px-2 py-1 rounded-md uppercase font-semibold"
                                >update</a
                            >

                            <a
                                href="/admin/projects/delete/1"
                                class="mb-3 text-white bg-red-500 hover:bg-red-600 border px-2 py-1 rounded-md uppercase font-semibold"
                                >Delete</a
                            >
                        </td>
                    </tr>
                        `
    }).join("")}
                   
                </tbody>
            </table>
            <div class="text-center mt-4">
                <a
                    class="mb-3 text-white bg-blue-500 hover:bg-blue-600 duration-150 linear px-3 py-2 rounded-md uppercase font-semibold"
                    href="/admin/project/add"
                    >add project</a
                >
                <a
                    class="mb-3 text-white bg-blue-500 hover:bg-blue-600 duration-150 linear px-3 py-2 rounded-md uppercase font-semibold"
                    href="/"
                    >back to home page</a
                >
            </div>
        </div>
    `
}
export default Project