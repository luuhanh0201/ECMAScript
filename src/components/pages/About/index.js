const AboutPage = () => {
    return `
    <div class="w-3/5 m-auto overflow-hidden">
    <div class="-translate-y-0 textTopToBottom">
        <h2 class="text-center text-7xl font-extrabold uppercase justify-center pb-8 pt-6">About me</h2>
        <h3 class="text-center text-2xl font-extrabold uppercase">welcome to my portfolio</h3>
    </div>
    <!-- info -->
    <div class="w-full flex pt-12">
        <img
            style="border-color: rgb(230, 69, 69, 0.6)"
            class="custom-img-home-page w-2/5 border-solid border-red-400 border-2"
            src="./src/assets/images/avatar.jpg"
        />

        <div class="w-4/6 pl-14">
            <p class="font-semibold text-lg pt-20 text-slate-600 text-justify">
                I am a front end developer. Currently, I am studying at FPT polytechnic school and also a
                student at F8 education. I can design user interfaces using ReactJS and NodeJs technology.
            </p>
            <div>
            <h3 class="uppercase text-center pt-4 font-semibold">technology</h3>
            </div>
            <ul class="flex text-4xl mt-3 justify-center">
                <li><i class="hover:scale-110 cursor-pointer fa-brands fa-html5 mr-4" style="color: #eb720f;"></i></li>
                <li><i class="hover:scale-110 cursor-pointer fa-brands fa-css3-alt mr-4" style="color: #246ef0;"></i></li>
                <li><i class="hover:scale-110 cursor-pointer fa-brands fa-sass mr-4" style="color: #cc5514;"></i></li>
                <li><i class="hover:scale-110 cursor-pointer fa-brands fa-js mr-4" style="color: #e6df0a;"></i></li>
                <li><i class="animate-spin hover:scale-110 cursor-pointer fa-brands fa-react mr-4" style="color: #3a88ee;"></i></li>
                <li><i class="hover:scale-110 cursor-pointer fa-brands fa-bootstrap mr-4" style="color: #8c24f5;"></i></i></li>
            </ul>
        </div>
    </div>

    <div class="pt-8 pb-16">
        <p class="text-center text-2xl font-bold uppercase pb-2">study at f8</p>
        <div
            class="overflow-hidden flex items-center justify-center border-solid border-gray-600 border-2 rounded-xl"
            style="height: 600px"
        >
            <img
                height="600px"
                width="1000px"
                class="w-full border-solid border-gray-600 border-2"
                src="./src/assets/images/f8.jpg"
            />
        </div>
    </div>

    <div>
        <h3 class="text-center text-2xl font-bold uppercase pb-2">contact me</h3>
        <form>
            <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-12">
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-4">
                            <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
                                >Full Name</label
                            >
                            <div class="mt-2">
                                <div
                                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 sm:max-w-md"
                                >
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autocomplete="username"
                                        class="rounded-md block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-800 placeholder:text-gray-400 focus:ring-red-300 sm:text-sm sm:leading-6"
                                        placeholder="Ex: Luu Dinh Hanh"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="sm:col-span-4">
                            <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
                                >Email</label
                            >
                            <div class="mt-2">
                                <div
                                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 sm:max-w-md"
                                >
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autocomplete="username"
                                        class="rounded-md block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-800 placeholder:text-gray-400 focus:ring-red-300 sm:text-sm sm:leading-6"
                                        placeholder="Ex: hanhldph24815@fpt.edu.vn"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="col-span-full">
                            <label for="about" class="block text-sm font-medium leading-6 text-gray-900"
                                >Description</label
                            >
                            <div class="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows="3"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="pt-4">
                        <button
                            class=" ml-2 rounded-full bg-slate-400 w-24 py-2 text-white font-semibold border-2 border-gray-400 hover:scale-110 duration-300 hover:bg-red-500"
                            type="submit"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
    `
}
export default AboutPage