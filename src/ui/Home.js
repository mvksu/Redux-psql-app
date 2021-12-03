import FilterMenu from "./FilterMenu";
import Panel from "./Panel";
import Stats from "./Stats";
import Card from "./Card";

export default function Home() {
  return (
    <div className="mt-28 md:mt-12 mx-4 lg:ml-64 lg:mr-40 md:ml-48 md:mr-32 h-full">
      <div className="w-full grid grid-cols-3 gap-6">
        <div className="bg-blue-400 rounded-md flex flex-col justify-end p-4">
          <h2 className="text-white font-extrabold text-md">Movies List</h2>
          <h3 className="text-gray-100 text-sm">Lorem impsu</h3>
        </div>
        <FilterMenu />
        <Stats />
        <Panel />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}
