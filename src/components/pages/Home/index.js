
const HomePage = () => {
  return `
    <div class="w-full flex justify-center m-auto">
    <div style="height: 500px" class="w-8/12 flex items-center">
      <div style="height: 100px" class="w-3/5 flex items-stretch justify-around flex-col">
        <div >
          <h2 class="bg-pink-300 inline text-2xl font-black leading-10 rounded-lg px-2 ">
            Hi, I'm Luu Dinh Hanh. This is my portfolio
          </h2>
          <br>
          <h2 class="bg-pink-300 inline text-2xl font-black leading-10 rounded-lg px-2">
            I'm currently a student at fpt polytechnic
          </h2>
        </div>
       
        <p class="text-xl mt-12">
          This site is where I share my <a href="/project" class="text-red-600 font-bold">PROJECT</a> and
          <a href="/skills" class="text-red-600 font-bold">SKILLS</a>. All of my information is available in
          <a href="/about" class="text-red-600 font-bold">ABOUT ME</a>, please contact me if you need it.
        </p>
      </div>

      <div class="bg-transparent w-2/5 flex justify-center items-center">
        <img width="80%" src="./src/assets/images/avatar.jpg" class="rounded-3xl bg-transparent transition duration-300 ease-in-out hover:scale-110" />
      </div>
    </div>
  </div>
    `
}
export default HomePage