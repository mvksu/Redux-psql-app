import { FaAngleLeft } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next"

export default function BackButton() {
  const history = useHistory()
  const { t } = useTranslation()
  return (
    <div className="flex items-center cursor-pointer" onClick={() => history.goBack()}>
      <FaAngleLeft className="text-blue-400" />
      <p className="font-extrabold">{t("Back")}</p>
    </div>
  );
}
