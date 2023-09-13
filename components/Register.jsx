export default function Register() {
  return (
    <>
      <div className='bg-white min-h-screen'>
        <div className='flex   flex-1'>
          <div className='bg-white flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
            <div className='mx-auto w-full max-w-sm lg:w-96 -mt-10'>
              <div>
                <img
                  className='h-10 w-auto'
                  src='https://www.ncer.com.my/wp-content/uploads/2020/06/logo.png'
                  alt='NCER Logo'
                />
                <h2 className='mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                  Register your account
                </h2>
              </div>

              <div className='mt-10'>
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
                          className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-black focus:ring-2 focus:ring-inset focus:ring-[#e15858] sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='password'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        Password
                      </label>
                      <div className='mt-2'>
                        <input
                          id='password'
                          name='password'
                          type='password'
                          autoComplete='current-password'
                          required
                          className='block w-full rounded-md text-black border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#e15858] sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='password'
                        className='block text-sm font-medium leading-6 text-gray-900'>
                        Confirm Password
                      </label>
                      <div className='mt-2'>
                        <input
                          id='confirm_password'
                          name='confirm_passwordpassword'
                          type='password'
                          autoComplete='confirm-password'
                          required
                          className='block w-full rounded-md text-black border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#e15858] sm:text-sm sm:leading-6'
                        />
                      </div>
                    </div>

                    <div className='flex items-center justify-between'>
                      <div className='flex items-center'>
                        <input
                          id='remember-me'
                          name='remember-me'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-[#ED1921] focus:ring-[#ED1921]'
                        />
                        <label
                          htmlFor='remember-me'
                          className='ml-3 block text-sm leading-6 text-gray-700'>
                          I accept the{" "}
                          <a
                            href='#'
                            className='font-semibold text-[#ED1921] hover:text-[#e15858]'>
                            terms
                          </a>{" "}
                          and
                          <a
                            href='#'
                            className='font-semibold text-[#ED1921] hover:text-[#e15858]'>
                            {" "}
                            privacy policy
                          </a>{" "}
                        </label>
                      </div>

                      {/* <div className='text-sm leading-6'>
                        <a
                          href='#'
                          className='font-semibold text-indigo-600 hover:text-indigo-500'>
                          Forgot password?
                        </a>
                      </div> */}
                    </div>

                    <div>
                      <button
                        type='submit'
                        className='flex w-full justify-center rounded-md bg-[#ED1921] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#e15858] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                        Register Here
                      </button>
                    </div>
                  </form>
                </div>
                <p className='mt-2 text-sm leading-6 text-gray-500 flex justify-center'>
                  Already have an account?{" "}
                  <a
                    href='./'
                    className='font-semibold text-[#ED1921] hover:text-[#e15858]'>
                    Sign-in
                  </a>
                </p>

                <div className='mt-5'>
                  <div className='relative'>
                    <div
                      className='absolute inset-0 flex items-center'
                      aria-hidden='true'>
                      <div className='w-full border-t border-gray-200' />
                    </div>
                    <div className='relative flex justify-center text-sm font-medium leading-6'>
                      <span className='bg-white px-6 text-gray-900'>
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className='mt-6 grid grid-cols-2 gap-4'>
                    <a
                      href='#'
                      className='flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]'>
                      <svg
                        className='h-5 w-5'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 20 20'>
                        <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                      </svg>
                      <span className='text-sm font-semibold leading-6'>
                        Twitter
                      </span>
                    </a>

                    <a
                      href='#'
                      className='flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]'>
                      <svg viewBox='0 0 48 48' className='h-5 w-5'>
                        <title>Google Logo</title>
                        <clipPath id='g'>
                          <path d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z' />
                        </clipPath>
                        <g class='colors' clip-path='url(#g)'>
                          <path fill='#FBBC05' d='M0 37V11l17 13z' />
                          <path
                            fill='#EA4335'
                            d='M0 11l17 13 7-6.1L48 14V0H0z'
                          />
                          <path
                            fill='#34A853'
                            d='M0 37l30-23 7.9 1L48 0v48H0z'
                          />
                          <path fill='#4285F4' d='M48 48L17 24l-4-3 35-10z' />
                        </g>
                      </svg>
                      <span className='text-sm font-semibold leading-6'>
                        Google
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' hidden w-0 flex-1 lg:block'>
            <img
              className=' min-h-screen w-full object-cover'
              src='./Images/reset-password.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
}
