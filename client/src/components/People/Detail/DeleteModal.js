import { useTranslation } from "react-i18next";
import { useRef } from "react";
import useOnClickOutside from '../../../helpers/useOneClickOutside';

export default function DeleteModal(
  { showModal, setShowModal, handleDelete, canYouDelete },
  props
) {
  const { t } = useTranslation();

  const ref = useRef();
  useOnClickOutside(ref, () => setShowModal(false));

  
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg md:ml-10 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" ref={ref}>
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  {canYouDelete ? (
                    <h3 className="text-3xl font-semibold">
                      {t("ConfirmDelete")}
                    </h3>
                  ) : (
                    <h3 className="text-3xl font-semibold">
                      Ups
                    </h3>
                  )}
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {canYouDelete ? (
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed text-center">
                      {t("ConfirmDeleteMsg")}
                    </p>
                  ) : (
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed text-center">
                      Sorry, you can't delete this person. To delete this unit
                      you must first delete it from all movies
                    </p>
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {canYouDelete && (
                    <button
                      className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleDelete()}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
