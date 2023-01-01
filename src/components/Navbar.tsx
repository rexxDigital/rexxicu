function Navbar() {
    return(
        <div className="pb-8">
            <ul className="flex flex-wrap items-center mx-auto">
                <li><a href="/" className="pr-3 cursor-pointer hover:text-gray-500 text-gray-900">Home</a></li>
                <li><a href="/#" className="pr-3 cursor-not-allowed text-gray-500 text-gray-900 line-through">Projects</a></li>
                <li><a href="/about" className="pr-3 cursor-not-allowed text-gray-500 text-gray-900 line-through">About</a></li>
            </ul>
        </div>
    )
}

export default Navbar