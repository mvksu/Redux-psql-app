import FilterMenu from "./FilterMenu";
import Panel from "./Panel";
import Stats from "./Stats";
import { useState } from "react";
import Pagination from "./Pagination";
import Items from "./Items";
import { getPeopleList } from "../../../ducks/people/operations";
import { getMoviesList } from "../../../ducks/movies/operations";
import { getActorsList } from "../../../ducks/actors/operations";
import { connect } from "react-redux";
import sortByValue from "../../../helpers/sortByValue";
import filterByValue from "../../../helpers/filterByValue";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { selectAllPeople } from "../../../ducks/people/selectors";
import { selectAllMovies } from "../../../ducks/movies/selectors";
import { selectAllActors } from "../../../ducks/actors/selectors";
import Notifications from "./Notifications/Notifications";
import Loading from "../../Elements/Loading";

function People({
  getPeopleList,
  getMoviesList,
  getActorsList,
  loading,
  people,
  movies,
  actors,
}) {
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("all");
  const [sortValue, setSortValue] = useState("id");
  const [searchValue, setSearchValue] = useState("");
  const directorsIds = movies.map((movie) => movie.director_id)
  const actorsIds = actors.map((rel) => rel.person_id)
  const { t } = useTranslation();


  const currentItems = filterByValue(
    sortByValue(people, sortValue, 1),
    filterValue,
    directorsIds,
    actorsIds
  )
    .filter(
      (item) =>
        item.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchValue.toLowerCase())
    )
  

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Notifications />
          <motion.div
            className="w-full grid grid-cols-2 gap-6 sm:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-blue-400 rounded-md flex flex-col justify-end p-4 col-span-3 sm:col-span-1">
              <h2 className="text-white font-extrabold text-md">
                {t("People")}
              </h2>
              <h3 className="text-gray-100 text-sm">
                <p className="hidden md:inline">
                  {t("Thereis")} {people.length > 0 ? t("are") : t("is")}
                </p>{" "}
                {people.length} {t("ludzi")}
              </h3>
            </div>
            <FilterMenu setFilterValue={setFilterValue} />
            <Stats />
            <Panel
              setSortValue={setSortValue}
              setSearchValue={setSearchValue}
            />
          </motion.div>
          <Items items={currentItems.slice(page * 4 - 4, page * 4)} />
          <Pagination items={currentItems} paginate={setPage} currentPage={page} />
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  people: selectAllPeople(state),
  movies: selectAllMovies(state),
  actors: selectAllActors(state),
  loading: state.people.loading,
});

const mapDispatchToProps = {
  getPeopleList,
  getMoviesList,
  getActorsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(People);