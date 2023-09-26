import useStore from "../../../../store/store";
import NewsLetterSection from "../newsletter-section/newsletter-section";
import SuccessfulSubscription from "../successful-subscription/successful-subscription";

export const Contacts: React.FC = () => {
  const { name, email } = useStore();

  return (
    <div className="flex justify-center my-10">
      <div className="w-full sm:w-3/4 lg:w-2/4 bg-slate-50 p-6 rounded-xl">
        {!name && !email ? (
          <NewsLetterSection />
        ) : (
          <SuccessfulSubscription name={name} />
        )}
      </div>
    </div>
  );
};
