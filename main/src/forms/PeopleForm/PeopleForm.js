import { Formik } from "formik";
import { initialValues } from "./initValues";
import { peopleValidationSchema } from "./validationSchema";
import FormStructure from "./FormStructure";
import { connect } from "react-redux";
import { createPeople, editPeopleByID } from "../../ducks/people/operations";
import { selectPeopleByID } from "../../ducks/people/selectors"
import { useHistory } from "react-router-dom";

function PeopleForm({ createPeople, editPeopleByID, isLoading, peopleToEdit }) {
  const history = useHistory()

  return (
    <Formik
      onSubmit={(values) => {
        if (peopleToEdit) {
          editPeopleByID(values)
          history.push('/')
        }
        else {
          createPeople(values)
          history.push('/')
        }
      }}
      initialValues={peopleToEdit ? peopleToEdit : initialValues}
      validationSchema={peopleValidationSchema}
      enableReinitialize
    >
      <FormStructure isLoading={isLoading} isEdit={peopleToEdit ? peopleToEdit : false} />
    </Formik>
  );
}
const mapStateToProps = (state, props) => ({
  isLoading: state.people.loading,
  peopleToEdit: selectPeopleByID(state, props.match.params.id)
});

const mapDispatchToProps = {
  createPeople,
  editPeopleByID
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleForm);
