import { Formik } from "formik";
import { initialValues } from "./initValues";
import { moviesValidationSchema } from "./validationSchema";
import FormStructure from "./FormStructure";
import { connect } from "react-redux";
import { createMovies, editMoviesByID } from "../../ducks/movies/operations";
import { useHistory } from "react-router-dom";

function MoviesForm({ createMovies, editMoviesByID, isLoading, movieToEdit, people }) {
  const history = useHistory();

  return (
    <Formik
      onSubmit={(values) => {
        if (movieToEdit) {
          const fixedValues = {...values, director: people.find(people => parseInt(people.id) === parseInt(values.director))}
          editMoviesByID(fixedValues);
          history.push("/movies");
        } else {
          const fixedValues = {...values, director: people.find(people => parseInt(people.id) === parseInt(values.director))}
          createMovies(fixedValues);
          history.push("/movies");
        }
      }}
      initialValues={movieToEdit ? movieToEdit : initialValues}
      validationSchema={moviesValidationSchema}
      enableReinitialize
    >
      <FormStructure
        isLoading={isLoading}
        isEdit={movieToEdit ? movieToEdit : false}
      />
    </Formik>
  );
}
const mapStateToProps = (state, props) => ({
  isLoading: state.movies.loading,
  movieToEdit: state.movies.movies.find(
    (movies) => parseInt(movies.id) === parseInt(props.match.params.id)
  ),
  people: state.people.people
});

const mapDispatchToProps = {
  createMovies,
  editMoviesByID,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesForm);
