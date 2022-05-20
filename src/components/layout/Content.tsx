import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import { Fragment } from "react";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white dark:bg-gray-700 shadow mt-16">
          <div className="max-w-auto mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>
          </div>
          <hr className="dark: border-white" />
        </header>
        <main className="min-h-full">
          <div className="max-w-auto mx-auto py-6 sm:px-6 lg:px-8 min-h-full">
            <div className="px-4 py-6 sm:px-4 border-4 border-dashed rounded-lg min-h-full">
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Content;
