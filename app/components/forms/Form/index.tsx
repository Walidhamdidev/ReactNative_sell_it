import { Formik } from "formik";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  initialValues: {};
  validationSchema: {};
  onSubmit: (values: {}) => void;
}

const AppForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
