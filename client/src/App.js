import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./ui/Layout/Layout";
import People from "./ui/People/Main/People";
import PeopleDetail from "./ui/People/Detail/PeopleDetail"
import MovieDetail from "./ui/Movies/Detail/MovieDetail"
import Movies from "./ui/Movies/Main/Movies"
import PeopleForm from "./forms/PeopleForm/PeopleForm"
import MoviesForm from "./forms/MoviesForm/MoviesForm"
import StatsPage from "./ui/Stats/StatsPage";
import ErrorPage from "./ui/Elements/ErrorPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPeopleList } from './ducks/people/operations';
import { getMoviesList } from './ducks/movies/operations';
import { getActorsList } from './ducks/actors/operations';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPeopleList())
    dispatch(getMoviesList())
    dispatch(getActorsList())
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Switch>
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
      </Layout>
    </Router>
  );
}

export default App;
