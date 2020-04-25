import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import styled from "styled-components"

import Input from "./Input"
import Button from "./Button"

const Wraper = styled.div`
  form {
    width: 90%;
    max-width: 600px;
    margin: 0 auto 50px auto;

    label {
      font-weight: 600;
      padding-bottom: 3px;

      div {
        margin-left: 5px;
        font-size: 12px;
        font-weight: 400;
        display: inline-block;
        color: red;
      }
    }
  }
`

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        user: "",
        email: "",
        title: "",
        message: "",
      }}
      validate={values => {
        const fieldIsRequiredSign = "*"
        const errors = {}

        //user name validation
        if (!values.title) errors.user = fieldIsRequiredSign

        //email validation
        if (!values.email) errors.email = fieldIsRequiredSign
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
          errors.email = "adres e-mial jest niepoprawny"

        //title validation
        if (!values.title) errors.title = fieldIsRequiredSign

        //message validation
        if (!values.message) errors.message = fieldIsRequiredSign

        return errors
      }}
      onSubmit={(values, actions) => {
        // fetch("/.netlify/functions/sendmail", {
        //   method: "POST",
        //   body: JSON.stringify(values),
        // })
        //   .then(response => {
        //     alert("Wiadomość została wysłana.")
        //     actions.resetForm()
        //   })
        //   .catch(() => {
        //     alert(
        //       "Przepraszamy, coś poszło nie tak. Prosimy spróbować później."
        //     )
        //   })
        //   .finally(() => actions.setSubmitting(false))
        alert(JSON.stringify(values))
      }}
    >
      {({ isSubmitting }) => (
        <Wraper>
          <Form>
            <h2>Formularz kontaktowy</h2>

            <label htmlFor="user">
              Imię i nazwisko
              <ErrorMessage name="user" component="div" />
            </label>
            <Field as={Input} type="text" name="user" />

            <label htmlFor="email">
              E-mail
              <ErrorMessage name="email" component="div" />
            </label>
            <Field as={Input} type="text" name="email" />

            <label htmlFor="title">
              Tytuł wiadomości
              <ErrorMessage name="title" component="div" />
            </label>
            <Field as={Input} type="text" name="title" />

            <label htmlFor="message">
              Treść
              <ErrorMessage name="message" component="div" />
            </label>
            <Field as={Input} type="textarea" name="message" />

            <Button type="submit" disabled={isSubmitting}>
              Wyślij
            </Button>
          </Form>
        </Wraper>
      )}
    </Formik>
  )
}

export default ContactForm
