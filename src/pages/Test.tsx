import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import PATH from "../constants/pagePath.json";

const Test = () => {
  const [buttonText, setButtonText] = useState("변경");

  const BUTTONREPLACETEXT = "변경 완료";

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>test page</title>
      </Helmet>
      <main>
        <section>
          <h3>test top part</h3>
        </section>
        <section>
          <div>
            <h3>test middle part</h3>
          </div>
          <div>
            <button
              onClick={() => {
                if (buttonText === "변경") {
                  setButtonText(BUTTONREPLACETEXT);
                } else if (buttonText === BUTTONREPLACETEXT) {
                  setButtonText("변경");
                }
              }}
            ></button>
          </div>
        </section>
        <section>
          <div>
            <button
              onClick={() => {
                navigate(PATH.root);
              }}
            >
              Home 페이지로 이동
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Test;
