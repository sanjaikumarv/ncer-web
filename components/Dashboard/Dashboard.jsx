import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/20/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false }
];
const teams = [
  { id: 1, name: "Career", href: "#", initial: "C", current: false },
  { id: 2, name: "Media Center", href: "#", initial: "M", current: false },
  { id: 3, name: "Contact", href: "#", initial: "C", current: false }
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "/" }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className=''>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-50 lg:hidden'
            onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <div className='fixed inset-0 bg-gray-900/80' />
            </Transition.Child>

            <div className='fixed inset-0 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'>
                <Dialog.Panel className='relative mr-16 flex w-full max-w-xs flex-1'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                      <button
                        type='button'
                        className='-m-2.5 p-2.5'
                        onClick={() => setSidebarOpen(false)}>
                        <span className='sr-only'>Close sidebar</span>
                        <XMarkIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4'>
                    <div className='flex h-16 shrink-0 items-center'>
                      <img
                        className='h-8 w-auto'
                        src='https://www.ncer.com.my/wp-content/uploads/2020/06/logo.png'
                        alt='Your Company'
                      />
                    </div>
                    <nav className='flex flex-1 flex-col'>
                      <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                        <li>
                          <ul role='list' className='-mx-2 space-y-1'>
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-50 text-[#ED1921]"
                                      : "text-gray-700 hover:text-[#ED1921] hover:bg-gray-50",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}>
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-[#ED1921]"
                                        : "text-gray-400 group-hover:text-[#ED1921]",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden='true'
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className='text-xs font-semibold leading-6 text-gray-400'>
                            Your teams
                          </div>
                          <ul role='list' className='-mx-2 mt-2 space-y-1'>
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-gray-50 text-[#ED1921]"
                                      : "text-gray-700 hover:text-[#ED1921] hover:bg-gray-50",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}>
                                  <span
                                    className={classNames(
                                      team.current
                                        ? "text-[#ED1921] border-[#ED1921]"
                                        : "text-gray-400 border-gray-200 group-hover:border-[#ED1921] group-hover:text-[#ED1921]",
                                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                                    )}>
                                    {team.initial}
                                  </span>
                                  <span className='truncate'>{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className='mt-auto'>
                          <a
                            href='#'
                            className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-[#ED1921]'>
                            <Cog6ToothIcon
                              className='h-6 w-6 shrink-0 text-gray-400 group-hover:text-[#ED1921]'
                              aria-hidden='true'
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col '>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4'>
            <div className='flex h-16 shrink-0 items-center'>
              <img
                className='h-8 w-auto'
                src='https://www.ncer.com.my/wp-content/uploads/2020/06/logo.png'
                alt='NCER Logo'
              />
            </div>
            <nav className='flex flex-1 flex-col'>
              <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                <li>
                  <ul role='list' className='-mx-2 space-y-1'>
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-50 text-[#ED1921]"
                              : "text-gray-700 hover:text-[#ED1921] hover:bg-gray-50",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}>
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-[#ED1921]"
                                : "text-gray-400 group-hover:text-[#ED1921]",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden='true'
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className='text-xs font-semibold leading-6 text-gray-400'>
                    Your teams
                  </div>
                  <ul role='list' className='-mx-2 mt-2 space-y-1'>
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-gray-50 text-[#ED1921]"
                              : "text-gray-700 hover:text-[#ED1921] hover:bg-gray-50",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}>
                          <span
                            className={classNames(
                              team.current
                                ? "text-[#ED1921] border-[#ED1921]"
                                : "text-gray-400 border-gray-200 group-hover:border-[#ED1921] group-hover:text-[#ED1921]",
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                            )}>
                            {team.initial}
                          </span>
                          <span className='truncate'>{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className='mt-auto'>
                  <a
                    href='#'
                    className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-[#ED1921]'>
                    <Cog6ToothIcon
                      className='h-6 w-6 shrink-0 text-gray-400 group-hover:text-[#ED1921]'
                      aria-hidden='true'
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className='lg:pl-72'>
          <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
            <button
              type='button'
              className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
              onClick={() => setSidebarOpen(true)}>
              <span className='sr-only'>Open sidebar</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>

            {/* Separator */}
            <div
              className='h-6 w-px bg-gray-200 lg:hidden'
              aria-hidden='true'
            />

            <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
              <form className='relative flex flex-1' action='#' method='GET'>
                <label htmlFor='search-field' className='sr-only'>
                  Search
                </label>
                <MagnifyingGlassIcon
                  className='pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400'
                  aria-hidden='true'
                />
                <input
                  id='search-field'
                  className='block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm'
                  placeholder='Search...'
                  type='search'
                  name='search'
                />
              </form>
              <div className='flex items-center gap-x-4 lg:gap-x-6'>
                <button
                  type='button'
                  className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Separator */}
                <div
                  className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200'
                  aria-hidden='true'
                />

                {/* Profile dropdown */}
                <Menu as='div' className='relative'>
                  <Menu.Button className='-m-1.5 flex items-center p-1.5'>
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full bg-gray-50'
                      src=''
                      alt=''
                    />
                    <span className='hidden lg:flex lg:items-center'>
                      <span
                        className='ml-4 text-sm font-semibold leading-6 text-gray-900'
                        aria-hidden='true'>
                        Tom Cook
                      </span>
                      <ChevronDownIcon
                        className='ml-2 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'>
                    <Menu.Items className='absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}>
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className='bg-white  min-h-screen py-2'>
            <div className='px-4 sm:px-6 lg:px-8'>
              <div className=''>
                <div className='relative'>
                  <p className='text-[#ED1921] absolute font-bold text-[80px] top-20 left-[800px]'>
                    Welcome{" "}
                    <span className='text-[40px] text-[#ED1921] font-bold'></span>
                  </p>
                  <img
                    className='w-[100%] h-52 rounded-md '
                    src='./Images/toplogo.jpg'
                    alt=''
                  />
                </div>
              </div>
              <div className='flex space-x-2 mt-6'>
                <div className=' w-3/5 border-2 border-slate-200 rounded-md min-h-screen'>
                  <h2 className='text-slate-600 font-bold px-4 mt-4'>
                    Announcements
                  </h2>
                  <p className='text-slate-500 px-4 mt-2'>
                    It is one of five economic corridors in Malaysia that was
                    established to ensure equitable distribution of wealth
                    across the country, in line with national aspirations to
                    become a high-income developed nation.
                  </p>
                  <br />
                  <p className='text-slate-500 px-4'>
                    The region has a highly evolved, business-friendly
                    environment, with local businesses adopting world-class
                    delivery standards to cater to the needs of multinational
                    corporations (MNCs). As a result, many MNCs have invested
                    and made NCER as one of their global business hubs.
                  </p>
                  <br />
                  <p className='text-slate-500 px-4'>
                    The region’s economic growth and transformation is driven
                    through various initiatives led by the Northern Corridor
                    Implementation Authority (NCIA).
                  </p>

                  <br />
                  <h2 className='text-slate-600 font-bold px-4'>
                    Strategic Location
                  </h2>

                  <p className='text-slate-500 px-4 mt-2'>
                    The region’s prominent position within the
                    Indonesia-Malaysia-Thailand Growth Triangle (IMT-GT) makes
                    it an important gateway in Southeast Asia for investment in
                    businesses and commercial expansion for various industries.{" "}
                  </p>
                  <br />
                  <h2 className='text-slate-600 font-bold px-4'>
                    Mature Business Ecosystem
                  </h2>

                  <p className='text-slate-500 px-4 mt-2'>
                    Over the years, NCER has developed a highly efficient
                    technical and business support ecosystem which facilitates
                    private sector participation in the region.
                  </p>
                  <br />
                  <h2 className='text-slate-600 font-bold px-4'>
                    Steady Flow of Talent
                  </h2>

                  <p className='text-slate-500 px-4 mt-2'>
                    NCER has a steady supply of industry-relevant talent that is
                    developed through upskilling programmes, on-the-job training
                    at various business establishments and regular industry –
                    academia engagements.
                  </p>
                  <br />
                  <h2 className='text-slate-600 font-bold px-4'>
                    Future Ready
                  </h2>

                  <p className='text-slate-500 px-4 mt-2'>
                    The region is ready to invest in new technologies and
                    innovation to remain competitive and relevant for the
                    current and future economic landscape.
                  </p>
                </div>
                <div className='w-2/5 '>
                  <div className=' border-2 border-slate-200 rounded-md  p-4 '>
                    <p className='text-slate-600 font-bold '>
                      Your Application Status
                    </p>
                    <p className='mt-2 pl-6 text-slate-500'>Draft</p>
                  </div>

                  <div className=' border-2 border-slate-200 rounded-md p-4 mt-2 '>
                    <p className='text-slate-600 font-bold '>
                      Looking For Support?
                    </p>
                    <div className='mt-2 '>
                      <a
                        href=''
                        className='text-slate-500 font-semibold underline'>
                        General Enquiry
                      </a>
                    </div>

                    <p className='mt-2  text-slate-500'>
                      For enquiry related to the programme, send us a message
                      here.
                    </p>

                    <div className='rounded-3xl bg-[#ED1921] p-2 w-[175px] mt-3'>
                      <p>Message On Telegram</p>
                    </div>

                    <div className='mt-10 '>
                      <a
                        href=''
                        className='text-slate-500 font-semibold underline'>
                        Technical Assistance
                      </a>
                    </div>

                    <p className='mt-2  text-slate-500'>
                      For support on technical issue (e.g. server error,
                      unidentified incomplete application error, etc), send us a
                      message from either channel below.
                    </p>

                    <div className='rounded-3xl bg-[#ED1921] p-2 w-[175px] mt-3'>
                      <p>Message On Telegram</p>
                    </div>
                  </div>

                  <div className=' border-2 border-slate-200 rounded-md  p-4 mt-2 '>
                    <p className='text-slate-600 font-bold '>
                      THE{" "}
                      <span className='text-[#ED1921]'>
                        NORTHERN CORRIDOR ECONOMIC REGION
                      </span>{" "}
                      (NCER) WAS LAUNCHED IN 2007
                    </p>
                    <p className='mt-2 pl-6 text-slate-500'>
                      NCER is one of the regions identified under the Ninth
                      Malaysia Plan for the promotion of balanced and equitable
                      national economic development. It covers the four northern
                      states of Peninsular Malaysia: Perlis, Kedah, Pulau Pinang
                      and Perak.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
