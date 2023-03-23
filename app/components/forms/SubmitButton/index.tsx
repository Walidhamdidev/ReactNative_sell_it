import AppButton from "../../Button";

import { useFormikContext } from "formik";

interface Props {
  label: string;
}

const SubmitButton = ({ label }: Props) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton onPress={handleSubmit} label={label} />;
};

export default SubmitButton;
