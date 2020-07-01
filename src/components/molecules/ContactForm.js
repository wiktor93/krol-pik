import React from "react"
import TextField from "@material-ui/core/TextField"
import styled from "styled-components"
import { useForm, Controller } from "react-hook-form"

import Button from "../atoms/Button"

const StyledForm = styled.form`
  width: 90%;
  max-width: 600px;
  margin: 50px auto 50px auto;

  display: flex;
  flex-direction: column;

  .MuiTextField-root {
    margin-bottom: 40px;
  }
`

const ContactForm = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    alert(JSON.stringify(data))
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Formularz kontaktowy</h2>

      <TextField
        name="name"
        variant="outlined"
        inputRef={register({ required: true })}
        label="Imie i nazwisko"
        error={errors.name ? true : false}
      />

      <TextField
        name="email"
        variant="outlined"
        inputRef={register({
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
        label="E-mail"
        error={errors.email ? true : false}
      />

      <TextField
        name="title"
        variant="outlined"
        inputRef={register({ required: true })}
        label="Tytuł wiadomości"
        error={errors.title ? true : false}
      />

      <TextField
        name="message"
        variant="outlined"
        inputRef={register({ required: true })}
        label="Treść"
        multiline
        rows={10}
        error={errors.message ? true : false}
      />

      <Button type="submit">Wyślij</Button>
    </StyledForm>
  )
}

export default ContactForm
