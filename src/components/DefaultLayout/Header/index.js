

const Header = () => {
    return `
    <header class="bg-white w-full flex justify-between shadow-sm py-1 z-50 overflow-hidden">
      <div class=" w-11/12 flex justify-between m-auto py-1 ">
        <div class="w-2/12" style="height: 75px;">
          <a href="/"><img style="height: 100%; width: 100px;" src="./src/assets/images/Logo.png" alt="12" /></a>
        </div>
        <ul class="w-10/12 flex justify-end pr-6 text-black uppercase text-base font-semibold items-center ">
          <li class="px-4 hover:text-red-600  transition delay-50 duration-300 ease-in-out"><a href="/home">Home</a></li>
          <li class="px-4 hover:text-red-600  transition delay-50 duration-300 ease-in-out "><a href="/project">project</a></li>
          <li class= "px-4 hover:text-red-600  transition delay-50 duration-300 ease-in-out "><a href="/about">About me</a></li>
          <li onclick="return window.open('https:/github.com/luuhanh0201')" class="pl-4  text-3xl cursor-pointer hover:text-red-600"><i class="fa-brands fa-github"></i></li>
          </ul>
          </div>
          </header>
          `
        }
        export default Header()
        // <li class="px-4 hover:text-red-600  transition delay-50 duration-300 ease-in-out "><a href="/skills">skills</a></li>