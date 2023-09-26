import { useTranslation } from "react-i18next";

interface Props {
  name: string;
}

const SuccessfulSubscription: React.FC<Props> = ({ name }) => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="font-semibold text-lg my-4 whitespace-normal">
        {t("contacts.successfulSubscription.title", { name: name })}
      </h1>
      <p className="whitespace-normal">
        {t("contacts.successfulSubscription.subscriptionInformation")}
      </p>
    </>
  );
};

export default SuccessfulSubscription;
