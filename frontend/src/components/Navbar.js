import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Resume from '../assets/docs/lahcen_oukharmouch_resume.pdf'

const navigation = [
  { name: 'About', href: '#about', current: true },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-900 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">
              <span className="text-indigo-400">{"<"}</span>
              Portfolio
              <span className="text-indigo-400">{"/>"}</span>
            </span>
          </div>

          {/* Right side - Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-indigo-400' : 'text-gray-300 hover:text-indigo-400',
                    'cursor-pointer text-lg font-medium transition-colors duration-300'
                  )}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={Resume}
                download
                className="ml-4 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 text-lg font-medium"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-800 text-indigo-400' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block px-3 py-2 rounded-md text-base font-medium cursor-pointer'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <DisclosureButton
            as="a"
            href={Resume}
            download
            className="block w-full px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Download Resume
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}