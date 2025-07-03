import React from 'react'
import { cn } from '@/lib/utils';

const navItems = [
    {name: "Home", href: "#hero" },
    {name: "About", href: "#about" },
    {name: "Skills", href: "#skils" },
    {name: "Projects", href: "#projects" },
    {name: "Contact", href: "#contact" },

];

export const Navbar = () => {
  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",  )} ></nav>
  )
}

export default Navbar