import React from "react";
import { Field, Formik, Form } from "formik";
type Props = {};
import axios from "axios";
const AddUsers = (props: Props) => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          username: "",
          surname: "",
          password: "",
        }}
        onSubmit={(values) => {
          axios
            .post("http://localhost:6060/users", values)
            .then((res) => console.log(res.data));
        }}
      >
        <Form>
          <Field name="username" placeholder="Username" />
          <Field name="surname" placeholder="Surname" />
          <Field name="email" placeholder="Email" />
          <Field name="password" placeholder="Password" />
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddUsers;
