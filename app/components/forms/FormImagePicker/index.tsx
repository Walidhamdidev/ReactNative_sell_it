import { FormikValues, useFormikContext } from "formik";

import ErrorMessage from "../ErrorMessage";
import ImageInputList from "../ImageInputList";

interface Props {
  name: string;
}

const FormImagePicker = ({ name }: Props) => {
  const { errors, setFieldValue, values, touched } =
    useFormikContext<FormikValues>();

  const imageUris = values[name] as string[];

  const handleOnAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleOnRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAdd={handleOnAdd}
        onRemove={handleOnRemove}
      />

      <ErrorMessage
        error={errors[name] as string}
        visible={touched[name] as boolean}
      />
    </>
  );
};

export default FormImagePicker;
