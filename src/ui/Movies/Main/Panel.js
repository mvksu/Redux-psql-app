import { Link } from "react-router-dom";
import Sort from "./Sort";
import Search from "./Search";
import { useTranslation } from "react-i18next"

export default function Panel({ setSortValue, setSearchValue }) {
  const { t } = useTranslation()
  return (
    <div className="bg-gray-700 w-full h-16 col-span-3 rounded flex items-center px-4 justify-between">
      <h1 className="hidden lg:inline">Items</h1>
      <Search setSearchValue={setSearchValue} />
      <Sort setSortValue={setSortValue} />
      <Link
        to="/movies/addform"
        className="text-white bg-blue-500 px-6 py-2 flex rounded-md hover:bg-blue-400"
      >
        + <p className="mx-2 hidden sm:inline">{t("Add new")}</p>
      </Link>
    </div>
  );
}
