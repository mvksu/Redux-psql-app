import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";


export default function Notifications() {
  const stack = useSelector((state) => state.movies.notificationStack);
  const dispatch = useDispatch()

  return (
    <>
      {stack.map((x, index) => (
        <motion.div
          key={index}
          className="fixed z-30 right-0 bottom-0 rounded m-2 flex justify-center items-center"
          drag
          whileTap={{ scale: 1.1 }}
          variants={{
            hidden: { y: -60 * index, opacity: 0 },
            visible: {
              y: -60 * index,
              opacity: 1,
            },
            exit: { opacity: 0 },
          }}
          initial="hidden"
          exit="exit"
          animate="visible"
          transition={{ duration: 0.4 }}
        >
          <div
            className={`${
              x.type === "green"
                ? "bg-teal-100 ring-borderGreen text-teal-900"
                : "bg-red-100 border ring-red-400 text-red-700 "
            } px-4 py-3 ring-2 rounded flex min-w-48 justify-between opacity-75 hover:opacity-100`}
            role="alert"
            onClick={() => dispatch({type: "MOVIES_NOTIFICATION_REMOVE", payload: index})}
          >
            <strong className="font-bold mr-1">
              {x.type === "green" ? "Hurra!" : "Error!"}
            </strong>
            <span className="block sm:inline mr-1">{x.msg}</span>
            <span>
              <svg
                className={`fill-current h-6 w-6 ${
                  x.type === "green" ? "text-teal-900" : "text-red-700"
                }`}
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        </motion.div>
      ))}
    </>
  );
}
