import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div className="font-nunito bg-blue-50 min-h-screen min-w-screen h-full w-full inline-block">
      <Navbar />
      <main className="border border-red-500 min-h-screen min-w-screen">{props.children}</main>
    </div>
  );
}
