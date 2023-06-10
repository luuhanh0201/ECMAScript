import { useState, useEffect } from "~/lib/index.js"
import HeaderAdmin from "~/components/Admin/Header"
import { API_URL } from "~/assets/data"
import Messenger from "../Messenger"

const SignInPage = () => {
    const [mess, setMess] = useState(true)
    // Chuyển hướng đến trang đăng ký
    useEffect(() => {
        const btnSignUpForm = document.getElementById("btn-signup-form");
        btnSignUpForm.addEventListener('click', (e) => {
            e.preventDefault()
            window.location.href = '/signup'
        })
    }, [])

    // Login vào admin
    useEffect(() => {
        const formSignin = document.querySelector("#form-signin");
        formSignin.addEventListener("submit", (e) => {
            // e.classList.remove("animate-slide-in-right")
            e.preventDefault()
            const account = {
                userName: document.querySelector("#userName").value,
                password: document.querySelector("#password").value
            }
            fetch(`${API_URL}/users`)
                .then((response) => response.json())
                .then((data) => {
                    return data.find(user => {
                        return account.userName === user.userName && account.password === String(user.password)
                    })
                })
                .then(user => {
                        if(user){
                            console.log("OK")
                            localStorage.setItem("user",JSON.stringify(user))
                            window.location.href = "/admin/projects"
                        }else{
                            console.log("Sai ten dang nhap hoac mat khau")
                        }
                })


        })

    },[])
    return `
    ${HeaderAdmin()}
    <div style="height: 600px" class="relative w-full mt-1">
            <div
                class="background-image__login backdrop-blur-20 h-full w-full bg-cover bg-no-repeat bg-center flex items-center absolute brightness-150"
                style="
                    background-image: url(https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/346798400_1987730858226050_4627111959096637772_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1a56Xfa4W1kAX-zvxuB&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBe4QmHqF-VGWD3nx7NxFmOwd5DPtK1cVm4HGxx75zo_g&oe=6482E74E);
                    filter: brightness(0.8);
                "
            ></div>
            <form
                id="form-signin"
                class="bg-slate-50 inline-block mx-auto my-32 p-6 drop-shadow-xl border border-red-500 shadow-blue-500 w-2/6 rounded-md bg-opacity-95 absolute left-0 right-0 animate-slide-in-right "
            >
                <h2 class="text-center text-2xl font-bold mb-3">Sign In</h2>
                <div class="mb-3">
                    <label class="block text-gray-700 font-bold mb-2">
                        User name
                        <span class="text-xs font-normal"></span>
                    </label>
                    <input
                        type="text"
                        id="userName"
                        placeholder="user name"
                        class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-300"
                    />
                </div>
                <div class="mb-3">
                    <label class="block text-gray-700 font-bold mb-2"
                        >Password<span class="text-xs font-normal"></span
                    ></label>
                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        class="w-full border border-gray-300 rounded-md py-1 px-2 outline-slate-300"
                        autocomplete="current-password"
                    />
                </div>

                <div class="text-center pt-6 flex flex-col">
                    <button
                        id="btn-login"
                        class="bg-red-500 text-base font-semibold py-1 px-2 rounded-md hover:bg-red-600 text-white linear duration-200"
                    >
                        Login
                    </button>

                    <button
                        id="btn-signup-form"
                        class="bg-gray-200 text-base mt-2 font-semibold py-1 px-2 rounded-md hover:bg-gray-500 hover:text-white linear duration-200"
                    >
                        SignUp
                    </button>
                </div>
            </form>
            ${mess === false ? Messenger("Login", "Đăng nhập thất bại", false) : ""}
        </div>
        </div>
       
    `

}
export default SignInPage;
