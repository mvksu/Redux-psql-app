import { useField } from "formik";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="py-1 w-ful">
      <div className="flex justify-between">
        <label htmlFor={field.name} className="text-gray-500 text-sm text-bold">
          {label}
        </label>
        {meta.touched && meta.error ? (
          <p className="text-red-500 text-xs">{meta.error}</p>
        ) : null}
      </div>
      {props.type === "textarea" ? (
        <textarea
          className={`bg-white ring-1 w-full p-3 rounded text-black text-sm font-bold focus:ring-2 focus:ring-blue-300 outline-none hover:ring-2 ${
            meta.touched && meta.error ? "ring-red-500 ring-2" : "ring-blue-300"
          }`}
          type={props.type || "text"}
          {...props}
          {...field}
        />
      ) : (
        <input
          className={`bg-white ring-1 w-full p-3 rounded text-black text-sm font-bold focus:ring-2 focus:ring-blue-300 outline-none hover:ring-2 ${
            meta.touched && meta.error ? "ring-red-500 ring-2" : "ring-blue-300"
          }`}
          type={props.type || "text"}
          {...props}
          {...field}
        />
      )}
    </div>
  );
};

export default Input;
