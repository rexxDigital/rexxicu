function SupportedProjects() {
    return(
        <>
            <h2 className="font-light font-serif text-gray-500 text-sm mb-2">Things I like</h2>

            <div className="mb-2">
                <h3 className="text-gray-900 text-2xl">ReactOS</h3>
                <p className="text-sm font-serif font-light text-gray-700">Open Source Windows compatible operating system</p>
                <div className="flex flex-wrap">
                    <p className="text-sm text-gray-900 pr-2">Links:</p>
                    <a href="https://reactos.org/" target="_blank"><p className="text-sm text-gray-500 hover:text-gray-900">Homepage</p></a>
                    <span className="pr-2">,</span>
                    <a href="https://github.com/reactos" target="_blank"><p className="text-sm text-gray-500 hover:text-gray-900">Github</p></a>
                </div>
            </div>

            <div>
                <h3 className="text-gray-900 text-2xl">Free Software Foundation</h3>
                <p className="text-sm font-serif font-light text-gray-700">Free as in freedom!</p>
                <div className="flex flex-wrap">
                    <p className="text-sm text-gray-900 pr-2">Links:</p>
                    <a href="https://www.fsf.org/" target="_blank"><p className="text-sm text-gray-500 hover:text-gray-900">Homepage</p></a>
                </div>
            </div>
        </>
    )
}

export default SupportedProjects