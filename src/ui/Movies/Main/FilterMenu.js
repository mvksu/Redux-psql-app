import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function FilterMenu({ setFilterValue }) {
  const { t } = useTranslation()
  const [checked, setChecked] = useState("all")
  const handleChange = (value) =>{
    setChecked(value)
    setFilterValue(value)
  }

  return (
    <div className="bg-white rounded-md">
      <ul className="mx-2 my-4 flex flex-wrap">
        <li className={`${checked === "all" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"} hover:bg-blue-500 hover:text-white rounded-md w-max px-2 py-1 m-1 cursor-pointer text-sm`} onClick={() => handleChange('all')}>
          {t("All")}
        </li>
        <li className={`${checked === "drama" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"} hover:bg-blue-500 hover:text-white rounded-md w-max px-2 py-1 m-1 cursor-pointer text-sm`} onClick={() => handleChange('drama')}>
          {t("Drama")}
        </li>
        <li className={`${checked === "horror" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"} hover:bg-blue-500 hover:text-white rounded-md w-max px-2 py-1 m-1 cursor-pointer text-sm`} onClick={() => handleChange('horror')}>
          Horror
        </li>
        <li className={`${checked === "comedy" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"} hover:bg-blue-500 hover:text-white rounded-md w-max px-2 py-1 m-1 cursor-pointer text-sm`} onClick={() => handleChange('comedy')}>
          {t("Comedy")}
        </li>

      </ul>
    </div>
  );
}
