const Header = (content,banner) => {
    return `
    <header >
      <div style="width: 1000px; height: 100px; background-color: red; text-align: center;" class="logo">
            <h1>logo</h1>
      </div>
      <div>${banner}</div>
      <div class="body" style="display: flex;">
        <ul style="width: 300px; height: 1000px; background-color: blue;">
          <li>Home</li>
          <li>About</li>
        </ul>
        <div class="content" style="width: 600px; height: 1000px; background-color: green;">
            ${content}
        </div>
      </div>
    </header>
    
    `
}
export default Header