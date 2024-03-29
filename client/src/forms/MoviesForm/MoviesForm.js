import { Formik } from "formik";
import { initialValues } from "./initValues";
import { moviesValidationSchema } from "./validationSchema";
import FormStructure from "./FormStructure";
import { connect } from "react-redux";
import { createMovies, editMoviesByID } from "../../ducks/movies/operations";
import { useHistory } from "react-router-dom";
import { selectMovieById } from "../../ducks/movies/selectors";
import { selectAllPeople } from "../../ducks/people/selectors";
import { motion } from "framer-motion";

const slideLeft = {
  hidden: {
    x: "-100%",
  },
  show: {
    x: 0,
  },
  exit: {
    x: "-100%",
  },
};

function MoviesForm({
  createMovies,
  editMoviesByID,
  isLoading,
  movieToEdit,
}) {
  const history = useHistory();

  return (
    <Formik
      onSubmit={(values) => {
        if (movieToEdit) {
          editMoviesByID({...values, director_id: parseInt(values.director_id)});
          history.push("/movies");
        } else {
          createMovies(values);
          history.push("/movies");
        }
      }}
      initialValues={movieToEdit ? movieToEdit : initialValues}
      validationSchema={moviesValidationSchema}
      enableReinitialize
    >
       <motion.div
        key={"form"}
        initial="hidden"
        animate="show"
        exit="exit"
        variants={slideLeft}
      >
      <FormStructure
        isLoading={isLoading}
        isEdit={movieToEdit ? movieToEdit : false}
      />
      </motion.div>
    </Formik>
  );
}
const mapStateToProps = (state, props) => ({
  isLoading: state.movies.loading,
  movieToEdit: selectMovieById(state, props.match.params.id),
  people: selectAllPeople(state),
});

const mapDispatchToProps = {
  createMovies,
  editMoviesByID,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesForm);
