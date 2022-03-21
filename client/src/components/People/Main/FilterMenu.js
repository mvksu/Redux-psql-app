import { useState } from "react"
import { useTranslation } from "react-i18next";

export default function FilterMenu({ setFilterValue }) {
  const [checked, setChecked] = useState("all")
  const handleChange = (value) =>{
    setChecked(value)
    setFilterValue(value)
  }
  const { t } = useTranslation()

  return (
    <div className="bg-white rounded-md">
      <ul className="mx-2 my-4 flex flex-wrap">
        <li className={`${checked === "all" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"} hover:bg-blue-500 hover:text-white rounded-md w-max px-2 py-1 m-1 cursor-pointer text-sm`} onClick={() => handleChange('all')}>
          {t("All")}
        </li>
        <li className={`${checked === "directors" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"} hover:bg-blue-500 hover:text-white rounded-md w-max px-2 py-1 m-1 cursor-pointer text-sm`} onClick={() => handleChange('directors')}>
          {t("Directors")}
        </li>
        <li className={`${checked === "actors" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"} hover:bg-blue-500 hover:text-white rounded-md w-max px-2 py-1 m-1 cursor-pointer text-sm`} onClick={() => handleChange('actors')}>
          {t("Actors")}
        </li>
        <li className={`${checked === "older50" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"} hover:bg-blue-500 hover:text-white rounded-md w-max px-2 py-1 m-1 cursor-pointer text-sm`} onClick={() => handleChange('older50')}>
          {t("OlderThan50")}
        </li>
        <li className={`${checked === "younger50" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"} hover:bg-blue-500 hover:text-white rounded-md w-max px-2 py-1 m-1 cursor-pointer text-sm`} onClick={() => handleChange('younger50')}>
          {t("YoungerThan50")}
        </li>
        
      </ul>
    </div>
  );
}
