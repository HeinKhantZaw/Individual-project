import React from 'react';
import Button from "arwes/lib/Button/index.js";

export default function MainLayout({children}) {
    return (
        <div className="holy-grail">
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="" className="flex items-center">
                            <img src="/assets/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                            <span
                                className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AGON-I</span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <Button animate className={"font-semibold text-lg custom-button"}>
                                Next Phase
                            </Button>
                        </div>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button"} layer={"secondary"}>
                                    Phase 1
                                </Button>
                            </li>
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button"} layer={"secondary"}>
                                    Phase 2
                                </Button>
                            </li>
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button"} layer={"secondary"}>
                                    Phase 3
                                </Button>
                            </li>
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button"} layer={"secondary"}>
                                    Phase 4
                                </Button>
                            </li>
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button"} layer={"secondary"}>
                                    Phase 5
                                </Button>
                            </li>
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button"} layer={"secondary"}>
                                    Phase 6
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main className="holy-grail__main">
                {children}
            </main>
        </div>
    );
}
