import Wrapper from "../components/Wrapper";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("ُEmail"),
  password: Yup.string().required().min(8).label("Password"),
});

const RegisterScreen = () => {
  return (
    <Wrapper style={{ padding: 20 }}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="name" icon="account" placeholder="Name" />
        <AppFormField name="email" icon="email" placeholder="Email" />
        <AppFormField name="password" icon="lock" placeholder="Password" />
        <SubmitButton label="Register" />
      </AppForm>
    </Wrapper>
  );
};

export default RegisterScreen;
