import { TextInputProps } from "react-native";
import { FormikValues, useFormikContext } from "formik";

import AppTextInput from "../TextInput";
import ErrorMessage from "../ErrorMessage";

interface Props extends TextInputProps {
  name: keyof FormikValues;
  icon?: any;
  width?: number | string;
}

const FormField = ({ name, icon, width, ...otherProps }: Props) => {
  const { setFieldValue, values, setFieldTouched, errors, touched } =
    useFormikContext<FormikValues>();

  return (
    <>
      <AppTextInput
        icon={icon}
        onChangeText={(text) => setFieldValue(name.toString(), text)}
        onBlur={() => setFieldTouched(name.toString())}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage
        error={errors[name] as string}
        visible={touched[name] as boolean}
      />
    </>
  );
};

export default FormField;
