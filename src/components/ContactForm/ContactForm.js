import React from "react";
import "./ContactForm.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import FlashMessages from "../FlashMessages/FlashMessages";

function ContactForm() {
  const [isSendMessages, setIsSendMessages] = React.useState(false);
  const [isErrorSendMessages, setIsErrorSendMessages] = React.useState(false);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      try {
        emailjs
          .send(
            // "service_cma02e3",
            import.meta.env.SERVICE,
            // "template_js29u7x",
            import.meta.env.TEMPLATE,
            values,
            import.meta.env.USE_ID
            // "DU3niBxsNTV5FaiCm"
          )
          .then(() => {
            sentMessage.classList.add("success");
            sentMessage.innerHTML = CONTACT_ERROR.success;
            setButtonState("Send Email");
            setSubmitting(false);
            resetForm();
            setIsSendMessages(true);
          });
      } catch {
        sentMessage.classList.add("error");
        sentMessage.innerHTML = CONTACT_ERROR.error;
        setButtonState("Send Email");
        setSubmitting(false);
        setIsErrorSendMessages(true);
      }
    },
  });
  return (
    <div className="ContactForm">
      <h3>Contactar</h3>
      <p>
        Envíame un mensaje y hagamos realidad ese proyecto que tienes en mente.
      </p>
      <form onSubmit={formik.handleSubmit} className="form">
        <label htmlFor="firstName">Nombre</label>
        <input
          id="user_name"
          name="user_name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.user_name}
        />
        <label htmlFor="email">Email</label>
        {formik.errors.user_email && <p>*{formik.errors.user_email}</p>}
        <input
          id="user_email"
          name="user_email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.user_email}
        />
        <label htmlFor="lastName">Mensaje</label>
        {formik.errors.message && <p>*{formik.errors.message}</p>}
        <textarea
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        <button type="submit" className="button primary">
          Enviar
        </button>
      </form>

      {/* Message */}
      {!!isSendMessages && (
        <FlashMessages
          isErrorMessage={false}
          name={formik.values.user_name}
          email={formik.values.user_email}
          onClose={() => setIsSendMessages(false)}
        />
      )}
      {!!isErrorSendMessages && (
        <FlashMessages
          isErrorMessage={true}
          onClose={() => setIsErrorSendMessages(false)}
        />
      )}
    </div>
  );
}

const initialValues = () => {
  return {
    user_name: "",
    user_email: "",
    message: "",
  };
};

const validationSchema = () => {
  return {
    user_name: Yup.string(),
    user_email: Yup.string().required(
      "Agregue un correo para poder contactarme con usted"
    ),
    message: Yup.string().required("Favor de agregar un mensaje"),
  };
};

export default ContactForm;
