import { ReactElement } from "react";
import AppPicker from "../../Picker";
import ErrorMessage from "../ErrorMessage";
import { FormikValues, useFormikContext } from "formik";

interface Props {
  name: string;
  placeholder: string;
  items: any;
  width?: number | string;
  AppFormPickerComponent?: any;
  numColumns: number;
}

const FormPicker = ({
  items,
  placeholder,
  AppFormPickerComponent,
  numColumns,
  name,
  width,
}: Props) => {
  const { errors, setFieldValue, values, touched } =
    useFormikContext<FormikValues>();

  return (
    <>
      <AppPicker
        numColumns={numColumns}
        items={items}
        AppPickerComponent={AppFormPickerComponent}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage
        error={errors[name] as string}
        visible={touched[name] as boolean}
      />
    </>
  );
};

export default FormPicker;
