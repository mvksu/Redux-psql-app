import { Form } from "formik";
import Input from "./Input";
import InputSelect from "./InputSelect";
import { connect } from "react-redux";
import { getPeopleList } from "../../ducks/people/operations";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import BackButton from "../../ui/UIComponents/BackButton";

function FormStructure({ isLoading, isEdit, directors, getPeopleList }) {
  const { t } = useTranslation();
  useEffect(() => {
    if (directors.length === 0) {
      getPeopleList();
    }
  }, []);

  return (
    <>
      <BackButton />
      <Form className="h-full md:w-1/2 mt-4 bg-white p-4 rounded">
        {isEdit ? (
          <h1 className="text-black text-3xl mt-5 font-bold pb-6">
            {t("Edit")} <b className="text-blue-400">#</b>
            {isEdit.id}
          </h1>
        ) : (
          <h1 className="text-black text-3xl font-bold pb-6">
            {t("New Movie")}
          </h1>
        )}
        <Input name="title" type="text" label={t("Title")} />
        <InputSelect
          name="genre"
          label={t("Genre")}
          options={["Drama", "Horror", "Comedy"]}
        />
        <Input name="release_date" type="date" label={t("Release Date")} />
        <Input name="description" type="textarea" label={t("Description")} />
        <Input name="image_url" type="url" label={t("Image URL")} />
        <InputSelect
          name="director"
          label={t("Director")}
          options={directors}
        />
        {isEdit ? (
          <button
            type="submit"
            className="w-full py-4 bg-blue-400 text-white rounded text-xl hover:bg-blue-300 my-4"
          >
            {t("Edit")}
          </button>
        ) : (
          <button
            type="submit"
            className="w-full py-4 bg-blue-400 text-white rounded text-xl hover:bg-blue-300 my-4"
          >
            {t("Create")}
          </button>
        )}
      </Form>
    </>
  );
}

const mapStateToProps = (state) => ({ directors: state.people.people });

const mapDispatchToProps = {
  getPeopleList,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormStructure);
