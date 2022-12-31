import React from "react";

function RecentProjects() {
    return(
        <>
            <h2 className="text-sm font-light font-serif text-gray-500 mb-2">Recent Projects</h2>
            <a href="#">
                <div className="w-full">
                    <div className="hover:text-gray-500">
                        <p className="text-xs text-light text-gray-500">Dec 31, 2022</p>
                        <div className="tooltip" data-tip="You are here!">
                            <h3 className="text-2xl text-gray-900">Personal website</h3>
                        </div>
                        <p className="text-sm font-serif font-light text-gray-700">My small, simple, static website.</p>
                    </div>
                    <div className="flex flex-wrap text-sm">
                        <p className="pr-2 text-gray-900">Stack:</p>
                        <p className="text-gray-500 hover:text-gray-900">Typescript</p>
                        <span className="pr-2">,</span>
                        <p className="text-gray-500 hover:text-gray-900">Reactjs</p>
                        <span className="pr-2">,</span>
                        <p className="text-gray-500 hover:text-gray-900">Astro</p>
                        <span className="pr-2">,</span>
                        <p className="text-gray-500 hover:text-gray-900">Tailwind</p>
                        <span className="pr-2">,</span>
                        <p className="text-gray-500 hover:text-gray-900">Daisyui</p>
                    </div>
                </div>
            </a>
        </>
    )
}

export default RecentProjects