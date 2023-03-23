import AppText from "../../Text";

interface Props {
  error: string | undefined;
  visible: boolean | undefined;
}

const ErrorMessage = ({ error, visible }: Props) => {
  if (!visible || !error) return null;

  return (
    <AppText
      style={{
        color: "red",
        fontSize: 14,
        textAlign: "center",
      }}
    >
      {error}
    </AppText>
  );
};

export default ErrorMessage;
