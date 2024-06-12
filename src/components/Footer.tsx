const Footer = () => {
  return (
    <>
      <footer className="bg-gray-600 rounded-lg shadow w-full  m-4">
        <div className="w-full  p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4  text-white sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                ጎኢማ
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                <a href="#" className="hover:underline text-white me-4 md:me-6">
                  ስለ እኛ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white me-4 md:me-6">
                  መመሪያ እና ስርዓት
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white me-4 md:me-6">
                  ፍቃድ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  እኛን ያግኙ
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center text-white ">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline text-white">
              ጎኢማ 
            </a>
            መብቱ በህግ የተጠበቀ ነው።
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
