import React from 'react';
import { Link } from 'react-router-dom';
import authBg from '../../assets/auth_bg.png';
import { Shield } from 'lucide-react';

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-height-screen w-full flex bg-[#fdf9f3] text-[#141414] overflow-hidden">
            {/* Left Side: Premium Image (Hidden on Mobile) */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                <img
                    src={authBg}
                    alt="Avaya Background"
                    className="absolute inset-0 w-full h-full object-cover object-[75%_center] opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#fdf9f3] via-transparent to-transparent opacity-80"></div>

                {/* Branding Overlay */}
                <div className="relative z-10 flex flex-col  pt-12 pl-24 xl:pl-40 h-full">
                    <div className="flex items-center  gap-3 ">
                        <div className="w-12 h-12 rounded-xl bg-[#fff4e0] flex items-center justify-center shadow-[0_0_20px_rgba(232,160,32,0.15)]">
                            <Shield className="text-[#e8a020]" size={28} />
                        </div>
                        <h1 className="text-4xl font-extrabold flex tracking-tight font-playfair text-[#141414]">Avaya</h1>
                    </div>
                    <h2 className="text-5xl font-extrabold mt-16 mb-6 leading-tight font-playfair text-[#141414]">
                        Seamless Security,<br />
                        <span className="text-[#e8a020]">Ultimate Confidence.</span>
                    </h2>
                    <p className="text-xl text-[#6b6b6b] max-w-lg leading-relaxed">
                        Experience the next generation of safe navigation and real-time security alerts. Join the elite network of travelers today.
                    </p>
                </div>
            </div>

            {/* Right Side: Auth Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 lg:p-12 relative h-screen overflow-y-auto bg-[#fdf9f3]">
                <div className="w-full max-w-lg flex flex-col items-center">

                    {/* Mobile Logo */}
                    <Link to="/" className="lg:hidden flex items-center gap-2 mb-8 mt-4 text-inherit no-underline">
                        <Shield className="text-[#e8a020]" size={36} />
                        <h1 className="text-4xl font-extrabold font-playfair text-[#141414]">Avaya</h1>
                    </Link>

                    {/* Custom Header */}
                    <div className="text-center w-full mb-8">
                        <h3 className="text-4xl font-extrabold mb-3 text-[#141414] font-playfair">{title}</h3>
                        <p className="text-[#6b6b6b] text-base">{subtitle}</p>
                    </div>

                    {/* Clerk Form Container */}
                    <div className="w-full flex justify-center auth-container">
                        {children}
                    </div>

                    {/* Footer */}
                    <div className="mt-12 text-center text-sm text-[#8a8f9e]">
                        <p>© {new Date().getFullYear()} Avaya Systems. All rights reserved.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
