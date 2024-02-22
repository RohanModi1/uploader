export const Home1=()=> {
    

      return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              <img src="logo.png" alt="Logo" className="h-10 mr-2" />
              My App
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 10a6 6 0 100-12 6 6 0 000 12z"/><path d="M10 10h4a8 8 0 110 16 8 8 0 01-8-8z"/></svg>
                </span>
                <input type="text" placeholder="Search" className="appearance-none rounded-r rounded-l-full border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
              </div>
            </div>
            <div>
              <button className="flex items-center px-4 py-2 bg-gray-800 border rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                <svg className="h-4 w-4 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.88 9.1A4.8 4.8 0 0016 5.4H5.21a4.8 4.8 0 00-3.79 2.7L7 14.17l3.32-3.32a4.8 4.8 0 10-6.36-6.36l1.41-1.41L5 9.4h11.08zM10 17l4-4-4-4v3h12v2H10z"/></svg>
                <span className="ml-2 text-white">Upload</span>
              </button>
            </div>
          </div>
        </nav>
      );
    };
    
    export default Home1;
