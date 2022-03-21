import Navbar from "./Navbar";

export default function Layout(props) {

  return (
    <div className="font-nunito bg-blue-50 min-h-screen min-w-screen h-full w-full inline-block">
      <Navbar className="z-40" />
      <main className="min-h-screen min-w-screen mt-28 mx-4 md:mt-12 md:ml-40 md:mr-16 lg:ml-64 lg:mr-40 xl:ml-72 xl:mr-48 h-full z-10">
        {props.children}
      </main>
    </div>
  );
}
