export default function Forgot() {
  return (
    <>
      <div className='bg-white min-h-screen '>
        <div className='flex  flex-1'>
          <div className='bg-white flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
            <div className='mx-auto w-full max-w-sm lg:w-96 -mt-28'>
              <div>
                <img
                  className='h-10 w-auto'
                  src='https://www.ncer.com.my/wp-content/uploads/2020/06/logo.png'
                  alt='Your Company'
                />
                <h2 className='mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                  Forgot Password
                </h2>
                <p className='mt-2 text-sm leading-6 text-gray-500'>
                  Enter your registered email and we will send you a password
                  reset link.
                </p>
              </div>

              <div className='mt-6'>
                <div>
                  <form action='#' method='POST' className='space-y-6'>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        Email address
                      </label>
                      <div className='mt-2'>
                        <input
                          id='email'
                          name='email'
                          type='email'
                          autoComplete='email'
                          required
                          className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ED1921] sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>
                    <p className='mt-2 text-sm leading-6 text-gray-500'>
                      Not a member?{" "}
                      <a
                        href='./register'
                        className='font-semibold text-[#ED1921] hover:text-[#e15858]'>
                        Sign-up
                      </a>
                    </p>

                    <div>
                      <button
                        type='submit'
                        className='flex w-full justify-center rounded-md bg-[#ED1921] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#e15858] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ED1921]'>
                        Send
                      </button>
                    </div>
                  </form>
                </div>

                <div className='mt-10'>
                  <div className='relative'>
                    <div
                      className='absolute inset-0 flex items-center'
                      aria-hidden='true'>
                      <div className='w-full border-t border-gray-200' />
                    </div>
                  </div>

                  <div className='mt-6 grid grid-cols-2 gap-4'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='hidden lg:block'>
            <img
              className='min-h-screen'
              src='./Images/login.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className='relative hidden w-0 flex-1 lg:block'>
            <img
              className='absolute inset-0 min-h-full w-full object-cover'
              src='https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
              alt=''
            />
          </div> */
}
