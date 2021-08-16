import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import "../styles/Register.css";

function Register() {
  let history = useHistory();

  const [listOf_logins, setListOf_logins] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/client_registered/logins")
      .then((response) => {
        var logins = [];
        response.data.map((value, key) => {
          logins.push(value.Login);
        });
        setListOf_logins(logins);
      });
  }, []);

  const initialValues = {
    imię: "",
    nazwisko: "",
    Mail: "",
    Login: "",
    Hasło: "",
    Numer_telefonu: "",
    Data_urodzenia: "",
    płeć: 0,
  };

  const onSubmit = (data) => {
    console.log(data);
    var klient_data = {
      imię: data.imię,
      nazwisko: data.nazwisko,
      Mail: data.Mail,
    };
    axios.post("http://localhost:3001/client", klient_data).then((odp) => {
      axios.get("http://localhost:3001/client/maxId").then((response) => {
        var klient_reg_data = {
          Login: data.Login,
          Hasło: data.Hasło,
          Numer_telefonu: data.Numer_telefonu,
          Data_urodzenia: data.Data_urodzenia,
          płeć: data.płeć,
          Klient_idKlient: response.data,
        };
        axios
          .post("http://localhost:3001/client_registered", klient_reg_data)
          .then((res) => {
            if (res.data.error) {
              alert(response.data.error);
              history.go(0);
            } else {
              alert("Pomyślnie zarejestrowano");
              history.push("/login");
            }
          });
      });
    });
  };

  const validationSchema = Yup.object().shape({
    imię: Yup.string().required().max(15),
    nazwisko: Yup.string().required().max(15),
    Mail: Yup.string().email().required().max(40),
    Login: Yup.mixed()
      .required()
      .notOneOf(listOf_logins, "Login must be unique. Try different login"),
    Hasło: Yup.string().required().max(45),
    Numer_telefonu: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(9, "Must be exactly 9 digits")
      .max(9, "Must be exactly 9 digits"),
    Data_urodzenia: Yup.date().required(),
  });

  return (
    <div className="Register-Page">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="Form-Container">
          <label>Imię: </label>
          <ErrorMessage name="imię" component="span" />
          <Field id="inputRegister" name="imię" placeholder="Jan..." />
          <label>Nazwisko: </label>
          <ErrorMessage name="nazwisko" component="span" />
          <Field id="inputRegister" name="nazwisko" placeholder="Kowalski..." />
          <label>E-mail: </label>
          <ErrorMessage name="Mail" component="span" />
          <Field
            id="inputRegister"
            name="Mail"
            placeholder="jankowalski@example.com..."
          />
          <label>Login: </label>
          <ErrorMessage name="Login" component="span" />
          <Field id="inputRegister" name="Login" placeholder="jkowalski..." />
          <label>Hasło: </label>
          <ErrorMessage name="Hasło" component="span" />
          <Field
            id="inputRegister"
            name="Hasło"
            type="password"
            placeholder="hasło..."
          />
          <label>Numer telefonu: </label>
          <ErrorMessage name="Numer_telefonu" component="span" />
          <Field
            id="inputRegister"
            name="Numer_telefonu"
            placeholder="123456789..."
          />

          <label>Data urodzenia: </label>
          <ErrorMessage name="Data_urodzenia" component="span" />
          <Field
            id="inputRegister"
            name="Data_urodzenia"
            placeholder="01-01-1999..."
          />

          <label>
            <Field type="radio" name="płeć" value="0" />
            Mężczyzna
          </label>
          <label>
            <Field type="radio" name="płeć" value="1" />
            Kobieta
          </label>
          <label>
            <Field type="checkbox" name="karta" />
            Wyrobić kartę członkowską?
          </label>
          <button type="submit">Zarejestruj</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
