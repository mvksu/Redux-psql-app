import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import People from "./components/People/Main/People";
import PeopleDetail from "./components/People/Detail/PeopleDetail"
import MovieDetail from "./components/Movies/Detail/MovieDetail"
import Movies from "./components/Movies/Main/Movies"
import PeopleForm from "./forms/PeopleForm/PeopleForm"
import MoviesForm from "./forms/MoviesForm/MoviesForm"
import StatsPage from "./components/Stats/StatsPage";
import ErrorPage from "./components/Elements/ErrorPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPeopleList } from './ducks/people/operations';
import { getMoviesList } from './ducks/movies/operations';
import { getActorsList } from './ducks/actors/operations';
import { AnimatePresence } from "framer-motion";

function App() {
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(getPeopleList())
    dispatch(getMoviesList())
    dispatch(getActorsList())
  }, [dispatch]);

  return (
      <Layout>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/"><Redirect to="/people" /></Route>
          <Route exact path="/people" component={People} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/stats" component={StatsPage} />
          <Route path="/movies/details/:id" component={MovieDetail} />
          <Route path="/movies/addform" component={MoviesForm} />
          <Route path="/movies/editform/:id" component={MoviesForm} />
          <Route path="/people/details/:id" component={PeopleDetail} />
          <Route path="/people/addform" component={PeopleForm} />
          <Route path="/people/editform/:id" component={PeopleForm} />
          <Route path="*" component={ErrorPage} />
        </Switch>
        </AnimatePresence>
      </Layout>
  );
}

export default App;
