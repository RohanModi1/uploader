import React from 'react';

export default function Upload() {
    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <form>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
            Upload File
          </label>
          <input
            type="file"
            id="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fileGroup" className="block text-gray-700 font-bold mb-2">
            File Name
          </label>
          <input
            type="text"
            id="fileGroup"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="materialLibrary" className="block text-gray-700 font-bold mb-2">
            Material Library
          </label>
          <input
            type="text"
            id="materialLibrary"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fileType" className="block text-gray-700 font-bold mb-2">
            File Type
          </label>
          <input
            type="text"
            id="fileType"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="uploadDate" className="block text-gray-700 font-bold mb-2">
            Upload Date
          </label>
          <input
            type="date"
            id="uploadDate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="uploadedBy" className="block text-gray-700 font-bold mb-2">
            Uploaded By
          </label>
          <input
            type="text"
            id="uploadedBy"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type='submit' placeHolder="Submit" className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Submit
        </button>
      </form>
    </div>
    )
  }