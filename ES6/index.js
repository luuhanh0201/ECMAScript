import { useState, useEffect } from "../src/lib"
const Page = () => {
    const API_PRODUCT = "http://localhost:3000/projects"
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch(API_PRODUCT)
            .then(response => response.json(""))
            .then(data => setProduct(data))
    }, [])

    useEffect(()=>{
        const btnDelete = document.getElementById("btn-delete");
        btnDelete.addEventListener("click",()=>{
            
        })

    })


 
    console.log(products)
    return `
    <table class="border-2 border-indigo-600">
        <thead>
            <tr class='uppercase'>
                <th>STT</th>
                <th>TITLE</th>
                <th>github</th>
            </tr>
        </thead>
    <tbody>
        ${products.map(({ id, title, github }, index) => {
        return `
            <tr>
            <td class="border-2 border-indigo-600 px-6"py-2>${index + 1}</td>
            <td class="border-2 border-indigo-600 px-6"py-2>${title}</td>
            <td class="border-2 border-indigo-600 px-6"py-2>${github}</td>
            <td class="border-2 border-indigo-600 px-6"py-2>
            <button id = "btn-delete" class="border-2 border-indigo-600 bg-red-600" data-id = ${id}>DELETE</button>
            <button class="border-2 border-indigo-600 ">EDIT</button>
            </td>
        </tr>
            `
    }).join("")}
    </tbody>
  </table>
    
    `
}
export default Page