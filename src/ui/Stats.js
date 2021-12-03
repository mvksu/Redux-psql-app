export default function Stats() { 

 return (
    <div className="bg-white rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-black font-extrabold text-md">Stats</h2>
            <p className="text-blue-400 text-xs underline">View</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mx-3"></div>
              <p className="text-gray-500 text-sm">People</p>
            </div>
            <p className="text-black font-extrabold text-md">1</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mx-3"></div>
              <p className="text-gray-500 text-sm">Directors</p>
            </div>
            <p className="text-black font-extrabold text-md">3</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-300 rounded-full mx-3"></div>
              <p className="text-gray-500 text-sm text-md">Actors</p>
            </div>
            <p className="text-black font-extrabold text-md">4</p>
          </div>
        </div>
 ) 
}
