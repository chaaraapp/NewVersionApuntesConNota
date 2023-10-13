import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown({ styling, selectedItem, setSelectedItem, list, title }) {

    return (

        <Menu as="div" className={`relative inline-block text-left ${styling}`}>
            <div>

                <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white p-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">

                    {title} {selectedItem?.nombre}

                    <FontAwesomeIcon icon={faAngleDown} className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />

                </Menu.Button>

            </div>

            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">

                <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right max-h-[300px] overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                    <div className="py-1">
                        {

                            list.map((item, index) => {

                                return (
                                    <Menu.Item key={index}>

                                        {({ active }) => (

                                            <p onClick={_ => setSelectedItem(item)} className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}  >
                                                {item?.nombre}
                                            </p>

                                        )}

                                    </Menu.Item>
                                )

                            })
                        }
                    </div>

                </Menu.Items>

            </Transition>

        </Menu>
    )
}
