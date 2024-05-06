import React, { useState } from "react";
import logo from './logo.png'
import { Button, IconButton, Input, ListItem, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { Bars3Icon, EllipsisVerticalIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {

  return (
    <header className='flex w-full xl:px-12 m-0 bg-white border-b-2 dark:bg-dark justify-between'>
     
     
        
          <div className="flex items-center gap-4 p-0 ml-16 xl:ml-2">
          <img
                src={logo}
                alt="logo"
                className="block xl:hidden dark:hidden w-40"
              />
           
          
          <div className="p-2 hidden sm:block">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
              className="lg:min-w-[300px]"
            />
          </div>
          </div>
   
            <div className="hidden md:flex gap-2 mr-6 items-center pr-4 md:pr-0 lg:pr-0">
              <Button
              variant="text"
              >Sign in 
              </Button>

              <Button
              variant="filled" className="bg-primary"
                >
                Sign up
              </Button>
            </div>

            <div className="flex gap-2 md:hidden mr-6 items-center pr-0">
            <div className="block sm:hidden">
            <MagnifyingGlassIcon className="w-5" />
            </div>
            <Menu placement="top">
          <MenuHandler>
             <Button variant="text" className="w-7 pl-0"><EllipsisVerticalIcon color="black" className="w-7 cursor-pointer" /></Button>
             </MenuHandler>
             <MenuList className="w-[250px]">
            <MenuItem className="flex gap-2 w-ful"><Button
              variant="text"
              >Sign in 
              </Button>
              <Button
              variant="filled" className="bg-primary"
                >
                Sign up
              </Button></MenuItem>

            <MenuItem>
            
            </MenuItem>
            <div className="p-2 hidden sm:block">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>
          
          </MenuList>
             </Menu>
            </div>
          
    </header>
  );
};

export default Navbar;
