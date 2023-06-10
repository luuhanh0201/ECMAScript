import { useState, useEffect } from "~/lib"
const BookNotesPage = () => {
    const URL_PRODUCT = "https://63f5d86059c944921f67a58c.mockapi.io/products"
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch(URL_PRODUCT)
            .then(response => response.json(""))
            .then(data => setProducts(data))
            .catch(() => {
                console.log("ERR")
            })
    }, [products])

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirm) return;

                fetch(`${URL_PRODUCT}/${id}`, {
                    method: "DELETE",
                })
                    .then(() => {
                        setProducts(products.filter((product) => parseInt(product.id) !== id));
                    });
            });
        }
    });

    return `
   <table>
   <thead>
       <tr>
           <th>#</th>
           <th>Tên</th>
           <th>Giá </th>
           <th>Nội dung</th>
           <th></th>
       </tr>
   </thead>
   <tbody>
       ${products
            .map(
                (product, index) => `
               <tr>
                   <td>${index + 1}</td>
                   <td>${product.name}</td>
                   <td>${product.price}</td>
                   <td>${product.description}</td>
                   <td>
                       <button class="btn btn-remove bg-slate-600 text-white p-2" data-id="${product.id
                    }">Remove</button>
                    <a href="/product/update/${product.id}">Edit</a>
                   </td>
               </tr>
       `
            )
            .join("")}
       
   </tbody>
</table>
   `
}
export default BookNotesPage