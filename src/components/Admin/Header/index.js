import { useState, useEffect } from "~/lib/index.js"

const HeaderAdmin = () => {
    // Quay về trang người dùng
    useEffect(() => {
        const backBtn = document.getElementById("btn-back");
        backBtn.addEventListener('click', (e) => {
            const confirmResult = window.confirm("Bạn muốn trở lại trang người dùng?")
            if (confirmResult) {
                window.location.href = '/'
            }
        })
    },[])
    return `
    <header class="bg-white w-full flex justify-between shadow-sm py-1 z-50 overflow-hidden">
            <div class="w-9/12 flex justify-between m-auto py-1 items-center">
                <div class="w-2/12" style="height: 75px">
                    <a href="/" class="p-0"
                        ><img class="p-0" style="height: 100%; width: 100px" src="/src/assets/images/Logo.png" alt=""
                    /></a>
                </div>
                <h2 class="mr-36 font-extrabold text-2xl uppercase text-red-600">admin</h2>
                <button id="btn-back" class="font-bold text-1xl uppercase hover:text-red-600 duration-200 linear">
                    Back <i class="fa-solid fa-right-from-bracket hover:scale-110"></i>
                </button>
            </div>
    </header>
    `
}
export default HeaderAdmin