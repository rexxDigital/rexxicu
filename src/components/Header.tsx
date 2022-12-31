import React, { useEffect, useState } from "react";
import github from '../images/github-mark.svg'
import email from '../images/email2.png'
import linkedin from '../images/linkedin.svg'
import fsf from '../images/logo-fsf.org.svg'

//"Our 'normal' 'adjusted' state is too often the abdication of ecstasy, the betrayal of our true potentialities.",
let quotes = [
    "The unexamined life is not worth living.",
    "If there were no Frenchwomen, life wouldn't be worth living.",
    "beep boop boop beep boop - Bastion",
    `"Meow" - Rexx (Rest in peace my beloved cat)`
]

function Header() {
    const [numbo, setNumbo] = useState<Number>();

    useEffect(() => {
        setNumbo(Math.round(Math.random() * 3))
    }, [])

    return(
        <>
            <h1 className="text-3xl font-bold mb-2 select-none cursor-text">Rexx J. Larsson's Digital Residency</h1>
            <p className="font-serif font-light text-gray-500 mb-2 cursor-text">
			    Rexx the cat loving software engineer. I want to make games and work with code, my interests include game development, <a href="https://reactos.org/" target="_blank" className="underline">ReactOS</a>, and psychology.
		    </p>
            <div className="flex flex-wrap items-center mx-auto">
                <a href="https://github.com/rexxDigital" target="_blank" className="pr-2">
                    <img src={github} width={25} alt="github logo" />
                </a>
                <a href="mailto:joellarssonpriv@gmail.com" className="pr-2">
                    <img src={email} width={25} alt="email logo" />
                </a>
                <a href="https://www.linkedin.com/in/jllarsson/" target="_blank">
                    <img src={linkedin} width={25} alt="linkedin logo" />
                </a>
                <div className="divider divider-horizontal"></div> 
                <a href="https://forum.members.fsf.org/u/rexx" target="_blank" className="pr-2">
                    <img src={fsf} width={135} alt="linkedin logo" />
                </a>
            </div>
            {numbo == 1 ? (
                // @ts-ignore
                <div className="divider font-serif font-light text-gray-500 text-xs select-none">{quotes[numbo]} </div> 
            ) : (
                // @ts-ignore
                <div className="divider font-serif font-light text-gray-500 text-sm select-none">{quotes[numbo]} </div> 
            )}
        </>
    )
}

export default Header;