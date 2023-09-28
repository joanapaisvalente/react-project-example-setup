import { useTranslation } from "react-i18next";
import FooterSection from "../footer-section/footer-section";
import "./footer.css";

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
    <div>
      <div className="bg-[url('./assets/footer.svg')] w-full bg-no-repeat bg-center bg-cover aspect-[960/300]"></div>
      <div className="w-full bg-slate-200 flex justify-center">
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
    </div>
  );
};

export default Footer;
