
const Messenger = (title, content,status) => {
    return `
    <div class="min-h-screen flex items-center justify-center fixed left-0 right-0 top-0 bg-black bg-opacity-50">
    <div class="bg-white shadow-md rounded px-8 py-6">
        <h2 class="text-xl font-extrabold mb-6 text-center">${title}</h2>
        <p class="${status === true ? "text-green-500" : "text-red-500"} mb-4 text-center">${content}</p>
    </div>
</div>
`
}

export default Messenger