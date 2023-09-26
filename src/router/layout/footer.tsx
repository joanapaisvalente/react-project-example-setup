import FooterSection from "./components/footer-section/footer-section";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const footerInformation = [
    {
      title: t("footer.firstSection.title"),
      links: [
        t("footer.firstSection.aboutUs"),
        t("footer.firstSection.ourServices"),
        t("footer.firstSection.privacyPolicy"),
      ],
    },
    {
      title: t("footer.secondSection.title"),
      links: [
        t("footer.secondSection.faq"),
        t("footer.secondSection.shippingInfo"),
        t("footer.secondSection.returnsPolicy"),
        t("footer.secondSection.paymentOptions"),
      ],
    },
    {
      title: t("footer.thirdSection.title"),
      links: [
        t("footer.thirdSection.instagram"),
        t("footer.thirdSection.facebook"),
        t("footer.thirdSection.twitter"),
      ],
    },
  ];

  return (
    <div className="w-full bg-slate-50 flex justify-center">
      <div className="w-full sm:w-4/5 flex flex-row">
        {footerInformation.map((information, index) => (
          <FooterSection
            key={index}
            sectionTitle={information.title}
            sectionLinks={information.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
