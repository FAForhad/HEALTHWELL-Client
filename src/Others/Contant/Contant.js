import { Link } from "react-router-dom";

export const Contant = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full bg-slate-600 md:px-24 lg:px-8 lg:py-20">
            <div className="p-8 rounded lg:max-w-screen-xl bg-white shadow-xl mx-auto sm:p-16">
                <div className="flex flex-col lg:flex-row">
                    <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            “Caring for seniors is a labor of love and requires ”
                            <br className="hidden md:block" />
                            a special person

                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="mb-4 text-base text-gray-700">
                            We have been providing services to patients for over 20 years.Our hospital has all kinds of departments, so you can get all kinds of treatment.We have all the professional specialists in our hospital
                        </p>
                        <Link
                            to='/aboutUs'
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more about us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};