'use client';

import { useState } from 'react';
import { X, Menu } from 'lucide-react';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="fixed top-5 left-1/2 transform -translate-x-1/2 md:w-2/3 w-5/6 z-10 bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur-md border-b border-white/10 shadow-lg rounded-full">
			<div className="mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
				{/* Logo */}
				<h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-transparent bg-clip-text tracking-wide">GoalGenius</h1>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-6">
					<a href="#" className="text-white text-lg font-medium hover:text-blue-400 transition-all duration-300">
						Home
					</a>
					<a href="#" className="text-white text-lg font-medium hover:text-purple-400 transition-all duration-300">
						Features
					</a>
					<a href="#" className="text-white text-lg font-medium hover:text-pink-400 transition-all duration-300">
						Pricing
					</a>
					<a href="#" className="text-white text-lg font-medium hover:text-green-400 transition-all duration-300">
						Contact
					</a>
				</nav>

				{/* Mobile Menu Button */}
				<button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl focus:outline-none">
					{isOpen ? <X size={28} /> : <Menu size={32} />}
				</button>

				{/* Mobile Menu Overlay */}
				<div className={`fixed w-full top-16 rounded-xl py-10 mt-5 right-0 h-fit bg-slate-900/90 backdrop-blur-xl transform ${isOpen ? 'translate-x-0' : 'translate-x-[150%]'} transition-transform duration-300 ease-in-out shadow-xl`}>

					{/* Mobile Menu Links */}
					<nav className="flex flex-col items-center space-y-6 mt-8 md:hidden">
						<a href="#" className="text-white text-lg font-medium hover:text-blue-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
							Home
						</a>
						<a href="#" className="text-white text-lg font-medium hover:text-purple-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
							Features
						</a>
						<a href="#" className="text-white text-lg font-medium hover:text-pink-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
							Pricing
						</a>
						<a href="#" className="text-white text-lg font-medium hover:text-green-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
							Contact
						</a>
					</nav>
				</div>
			</div>
		</header>
	);
}
