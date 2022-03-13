import {Link} from "react-router-dom"

export default function ErrorPage({error}) { 

 return (
    <div className="h-screen flex justify-center items-center text-black flex-col">
        <p className="text-8xl ">404</p>
        <p className="text-3xl my-2">{error}</p>
        <Link to="/" className="bg-blue-400 px-6 py-3 rounded text-white my-6 mb-44 hover:bg-blue-300">
            Home
        </Link>
    </div>
 ) 
}
