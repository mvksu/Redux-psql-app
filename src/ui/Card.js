import face from "../images/face.jpeg";

export default function Card() {
  return (
    <div className="bg-white w-full rounded relative flex md:flex-col items-center col-span-2 md:col-span-1 h-40 md:h-full justify-around md:justify-between">
      <div className="bg-blue-400 w-full h-20 rounded-t absolute hidden md:flex"></div>
      <div className="md:w-24 md:h-24 w-20 h-20 rounded-full md:absolute transform bottom-1/2 left-1/2 md:-translate-x-2/4 overflow-hidden">
        <img src={face} alt="" className="object-contain " />
      </div>
      <div className="md:text-center">
        <h2 className="text-gray-400 md:mt-40 text-sm">Director</h2>
        <h1 className="text-black text-md">John Kowalski</h1>
        <h2 className="text-gray-400 text-sm">76 lat</h2>
      </div>
      <h2 className="text-gray-400 md:absolute top-20 left-4 text-sm mt-2">
        <b className="text-blue-400">#</b> 7564
      </h2>
      <button className="cursor-pointer px-4 py-2 bg-blue-400 text-white my-4 rounded">
        Check
      </button>
    </div>
  );
}
