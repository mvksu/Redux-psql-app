import { Form } from "formik";
import Input from "./Input";
import { useTranslation } from "react-i18next";
import BackButton from "../../ui/UIComponents/BackButton";

export default function FormStructure({ isLoading, isEdit, id }) {
  const { t } = useTranslation();
  return (
    <>
    <BackButton />
    <Form className="h-full md:w-1/2 mt-4  bg-white p-4 rounded">
      {isEdit ? (
        <h1 className="text-black text-3xl mt-5 font-bold pb-6">
          {t("Edit")} <b className="text-blue-400">#</b>
          {isEdit.id}
        </h1>
      ) : (
        <h1 className="text-black text-3xl font-bold pb-6">{t("New Item")}</h1>
      )}
      <Input name="first_name" type="text" label={t("First Name")} />
      <Input name="last_name" type="text" label={t("Last Name")} />
      <Input name="nationality" type="text" label={t("Nationality")} />
      <Input name="birth_date" type="date" label={t("Birth Date")} />
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
          {t("Edit")}
        </button>
      )}
    </Form>
    </>
  );
}
