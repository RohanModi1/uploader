import { Search, Upload } from "lucide-react";

import { Link } from "react-router-dom";

export default function Content() {
    return (
        <>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch bg-gray-100 p-4 rounded-lg shadow-lg w-full">
      {/* Search Bar */}
      <div className="flex-1 md:mr-4">
        <form className="flex items-center bg-white rounded-lg shadow-sm">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            <Search size={20} />
          </button>
        </form>
      </div>
      
      {/* Logo (Placeholder) */}
      <div className="flex-1 md:mx-4 my-4 md:my-0">
        <img src="./logo.jpg" alt="Logo" className="h-12 md:h-16" />
      </div>
      
      {/* Upload Button */}
      <div className="flex-1 md:ml-4">
        <input
          type="file"
          style={{ display: 'none' }}
        />
        <button
          type="button"
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          
        >
          <Upload size={20} className="mr-2" />
          <Link to="/upload">Upload File</Link> 
        </button>
      </div>
    </div>
    
    </>
      );
}