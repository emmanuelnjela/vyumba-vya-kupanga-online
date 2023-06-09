import { Link } from "react-router-dom";

import AddHouseNavBtns from "./addHouseNavBtns";

function AddHouseComfirm({ currentItemNum, screenWidth }) {
  return (
    <>
      <div className="add-house__comfirm-info">
        <fieldset className="mb-sm">
          <legend>
            <h5 className="d-flex align-items-center c-gap-xxxsm">
              <span className="rounded rounded--primary">1</span>Hakikisha
              taarifa za muhimu
            </h5>
          </legend>
          <div className="m-xsm">
            <h6 className="text--title">
              Eneo kinakodivatikana:{" "}
              <span className="text--muted">uyole mbeya</span>
            </h6>
            <h6 className="text--title">
              Kodi inalipwa kwa miezi:{" "}
              <span className="text--muted">mitatu</span>
            </h6>
            <h6 className="text--title">
              Kodi kwa mwezi mmoja ni:{" "}
              <span className="text--muted">20000Tsh</span>
            </h6>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h5 className="d-flex align-items-center c-gap-xxxsm">
              <span className="rounded rounded--primary">2</span>Hakiki Malezo
              mafupi kuusu chumba
            </h5>
          </legend>
          <h6 className="m-xsm">
            Chumba ni kikubwa umeme wa kutosha kipo kalibu na barabara, ulinzi
            wake wa kutosha, kinakopatikana uyole kalibu na madukani, soko liko
            karibu sana
          </h6>
        </fieldset>
        <h5 className="d-flex align-items-center c-gap-xxxsm mt-sm">
          <Link to="" className="text--underline">
            Bonyeza hapa kuhakikisha picha ulizo weka
          </Link>
        </h5>

        <div className="add-house__comfirm-imgs my-sm"></div>
      </div>
      <AddHouseNavBtns currentItemNum={currentItemNum} screenWidth={screenWidth}/>
    </>
  );
}

export default AddHouseComfirm;

