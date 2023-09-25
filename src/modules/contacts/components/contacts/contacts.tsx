import useStore from "../../../../store/store";
import NewsLetterSection from "../newsletter-section/newsletter-section";

export const Contacts: React.FC = () => {
  const { name, email } = useStore();

  return (
    <>
      {!name && !email ? (
        <NewsLetterSection />
      ) : (
        <div>
          {name} --- {email}
        </div>
      )}
    </>
  );
};
