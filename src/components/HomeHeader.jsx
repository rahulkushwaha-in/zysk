export const HomeHeader = () => {
  return (
    <>
      <section className="text-center pt-20 pb-6">
        {/* <!-- Announcement --> */}
        <div className="mb-4 inline-flex justify-center px-2 items-center space-x-4 border-[1px] border-purple-400 bg-opacity-5 bg-purple-600 rounded-full">
          <span className=" animate-pulse inline-flex items-center pl-1 pr-1 border-[1px] my-1 border-purple-400 text-[10px] font-medium text-purple-500 bg-white rounded-full">
            New feature
          </span>
          <a
            href="#"
            className="text-xs font-medium text-purple-500 hover:underline"
          >
            Check out the team dashboard →
          </a>
        </div>
        {/* <!-- Main Heading --> */}
        <h1 className="px-2 text-4xl font-bold md:text-5xl text-gray-900 mb-6">
          Beautiful analytics to grow smarter
        </h1>
        {/* <!-- Subheading --> */}
        <p className="px-3 text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        {/* <!-- Buttons --> */}
        <div className=" mx-4 flex flex-col-reverse sm:flex-row justify-center sm:space-x-4 mb-16">
          <a
            href="#"
            className="my-3 flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-100"
          >
            <div className="flex justify-center items-center px-3 pt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="14"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#303031"
                  d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"
                />
              </svg>
            </div>
            Demo
          </a>
          <a
            href="#"
            className="sm:my-3 sm:px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700"
          >
            Sign up
          </a>
        </div>
        {/* <!-- Dashboard Image --> */}
        <div className="mx-6 md:h-[430px] sm:overflow-hidden ">
          <div className="border-8 mx-auto md:border-t-8 md:border-l-8 md:border-r-8 border-black rounded-2xl lg:w-[1000px] md:h-[560px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p-yLcZHqug8HLXrvWmMe8-jWLalHXNdtDpzF~FiIjowYxKtNiuas~l4KSlOfx23lBvplX8eyG6JssJrZrH2wkgcImXDbM1UpfBAKyN1wVIm4BPPgdk3e9qJtBvyXTOS35vV8qPIIQA-pORf755MXHciaUypCcsr0N1T3Po7fqkSVbxqeVYHid1-qbSISn0MNVhzTIbPDCHfsSP-XxzRpNybM5iFottK7v8kDr66F-Duwvu~WnDRDGI5Sj0Itt6vPZB1fUBA1UdhX0Ozw897xh8znuSarbFkNhPKxD3gL~PAtACvtuR6UXiORK2rMV~w~d-wSVw4rw9DCrykivlipVA__"
              alt="Dashboard"
              className="rounded-lg shadow-lg w-[1280px] h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};
