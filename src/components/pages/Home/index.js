
const HomePage = () => {
  return `
  <div class="w-full flex flex-col justify-center items-center mb-12">
  <div style="height: 500px" class="w-8/12 flex items-center relative">
      <div style="height: 100px" class="w-3/5 flex items-stretch justify-around flex-col">
          <div>
              <h2 class="bg-pink-300 inline text-2xl font-black leading-10 rounded-lg px-2">
                  Hi, I'm Luu Dinh Hanh. This is my portfolio
              </h2>
              <br />
              <h2 class="bg-pink-300 inline text-2xl font-black leading-10 rounded-lg px-2">
                  I'm currently a student at fpt polytechnic
              </h2>
          </div>

          <p class="text-xl mt-12">
              This site is where I share my <a href="/project" class="text-red-600 font-bold">PROJECT</a> and
              <a href="/skills" class="text-red-600 font-bold">SKILLS</a>. All of my information is available
              in <a href="/about" class="text-red-600 font-bold">ABOUT ME</a>, please contact me if you need
              it.
          </p>
      </div>

      <div class="custom-img-home-page"></div>
  </div>
  <div class="flex text-4xl items-center">
      <p class="border-r-4 x text-2xl

       border-e-red-600 pr-2 mr-8 font-bold select-none ">Tech Stack</p>
      <ul class="flex">
          <li><i class="hover:scale-110 cursor-pointer fa-brands fa-html5 mr-4" style="color: #eb720f;"></i></li>
          <li><i class="hover:scale-110 cursor-pointer fa-brands fa-css3-alt mr-4" style="color: #246ef0;"></i></li>
          <li><i class="hover:scale-110 cursor-pointer fa-brands fa-sass mr-4" style="color: #cc5514;"></i></li>
          <li><i class="hover:scale-110 cursor-pointer fa-brands fa-js mr-4" style="color: #e6df0a;"></i></li>
          <li><i class="animate-spin hover:scale-110 cursor-pointer fa-brands fa-react mr-4" style="color: #3a88ee;"></i></li>
          <li><i class="hover:scale-110 cursor-pointer fa-brands fa-bootstrap mr-4" style="color: #8c24f5;"></i></i></li>
      </ul>
  </div>
</div>
    `
}
export default HomePage