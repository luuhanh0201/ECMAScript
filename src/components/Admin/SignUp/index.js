import { useState, useEffect } from "~/lib/index.js"
import HeaderAdmin from "~/components/Admin/Header"
import { API_URL } from "~/assets/data"
const SignUpPage = () => {


    // Quay về trang đăng nhập
    useEffect(() => {
        const loginBtn = document.getElementById("btn-login");
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault()
            window.location.href = '/admin/signin'

        }, [])
    })
    // Sử lý đăng ký tài khoản -> API
    useEffect(() => {
        const btnSignUpSubmit = document.getElementById("btn-signup-submit")
        btnSignUpSubmit.addEventListener("click", (e) => {
            e.preventDefault()

            const user = {
                fullName: document.querySelector("#fullName").value,
                userName: document.querySelector("#userName").value,
                password: document.querySelector("#password").value,
                email: document.querySelector("#email").value,

            }
            fetch(`${API_URL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
                .then(() => {
                    console.log("Dang ky thanh cong")
                })
                .catch(() => {
                    console.log("Dang ky that bai")
                })


        })


    })

    return `
    ${HeaderAdmin()}
    <div style="height: 600px" class="relative w-full mt-1 ">
    <div
        class="background-image__login backdrop-blur-20 h-full w-full bg-cover bg-no-repeat bg-center flex items-center absolute brightness-150"
        style="
            background-image: url(https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/346798400_1987730858226050_4627111959096637772_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1a56Xfa4W1kAX-zvxuB&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBe4QmHqF-VGWD3nx7NxFmOwd5DPtK1cVm4HGxx75zo_g&oe=6482E74E);filter: brightness(0.8);
        "
    ></div>
    <form
        id="form-sign-up"
        class="bg-slate-50 inline-block mx-auto my-6 p-6 drop-shadow-xl border border-red-500 shadow-blue-500 w-2/6 rounded-md bg-opacity-95 absolute left-0 right-0 top-0 animate-slide-in-right"
    >
        <h2 class="text-center text-2xl font-bold mb-3">Sign Up</h2>
        <div class="mb-3">
            <label class="block text-gray-700 font-bold mb-2"
                >Full name<span class="text-xs font-normal"></span
            ></label>
            <input type="text" id="fullName" class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-300" placeholder="VD: Lưu Đình Hạnh"/>
        </div>
        <div class="mb-3">
            <label class="block text-gray-700 font-bold mb-2"
                >User name<span class="text-xs font-normal"></span
            ></label>
            <input type="text" id="userName" class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-300" placeholder="VD: luuhanh0201"/>
        </div>
        <div class="mb-3">
            <label class="block text-gray-700 font-bold mb-2"
                >Password <span class="text-xs font-normal"></span
            ></label>
            <input type="password" id="password" class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-300" placeholder="VD: 02012001Hh" />
        </div>
        <div class="mb-3">
            <label class="block text-gray-700 font-bold mb-2"
                >Confirm Password<span class="text-xs font-normal"></span
            ></label>
            <input type="password" id="confirmPassword" class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-300" placeholder="VD: 02012001Hh" />
        </div>
        <div class="mb-3">
            <label class="block text-gray-700 font-bold mb-2"
                >Email <span class="text-xs font-normal"></span
            ></label>
            <input type="email" id="email" class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-300" placeholder="VD: luuhanh0201@gmail.com" />
        </div>

        <div class="text-center pt-6">
         <button
          id="btn-login"    
         class="bg-gray-200 text-base font-semibold py-1 px-2 rounded-md hover:bg-gray-500 hover:text-white linear duration-200"
         >
         Login
         </button> 
            <button id = "btn-signup-submit"
                type="submit"
                class="bg-red-500 text-base font-semibold py-1 px-2 rounded-md hover:bg-red-600 text-white linear duration-200"
            >
                SignUp
            </button>
        </div>
    </form>
</div>
    `

}
export default SignUpPage