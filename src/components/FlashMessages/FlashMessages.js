import React from "react";
import "./FlashMessages.css";
import { Icon } from "@iconify/react";

function FlashMessages({ isErrorMessage, onClose, name, email }) {
  console.log(isErrorMessage);
  return (
    <div
      className={`FlashMessages ${isErrorMessage && "FlashMessages__error"}`}
    >
      <div>
        <div className="FlashMessages__icon">
          {isErrorMessage ? (
            <Icon icon="pixelarticons:close" />
          ) : (
            <Icon icon="pixelarticons:check" />
          )}
        </div>
        <h4 className="FlashMessages__message">
          {isErrorMessage ? (
            <>
              Error <br /> <span>Favor de intentarlo de nuevo </span>
            </>
          ) : (
            <>
              ¡Gracias{name ? " " + name.split(" ")[0] : ""}! <br />
              <span>
                En breve me contactaré contigo, a tu correo{" "}
                <span className="FlashMessages__message--email">{email}</span>
              </span>
            </>
          )}
        </h4>
      </div>

      <button className="FlashMessages__btn" onClick={onClose}>
        <Icon icon="pixelarticons:close" className="icon-close" />
      </button>
    </div>
  );
}

export default FlashMessages;
