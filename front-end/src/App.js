import './index.css'
import { useState } from 'react'
import { Card } from './custom_components/Cards'
import { FilmModal } from "./custom_components/FilmModal";
import {
  FilmIcon,
} from '@heroicons/react/24/outline'


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Site() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <header className="dark:bg-gray-800 ">
          <nav className=" flex justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <button className="h-10 w-10" onClick={() => { setIsOpen(true) }}>
                <FilmIcon className="h-6 w-6 stroke-white" aria-hidden="true" />
              </button>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button>
                <a className="text-sm font-semibold leading-6 text-white">
                  Log in <span aria-hidden="true">&rarr;</span>
                </a>
              </button>
            </div>
          </nav>
        </header>

        <div className="flex justify-center align-middle">
          <FilmModal visible={isOpen} closeFunction={() => setIsOpen(false)}></FilmModal>
        </div>

        <div className="flex m-2">
          <Card></Card>
        </div>

      </>

  )
}
