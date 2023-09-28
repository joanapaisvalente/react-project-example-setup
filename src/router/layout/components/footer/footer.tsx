import { useTranslation } from "react-i18next";
import FooterSection from "../footer-section/footer-section";

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
    <div className="relative flex flex-col">
      <div className="wavy">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="w-full bg-slate-50 flex justify-center">
        <div className="w-full sm:w-4/5 flex flex-row justify-between">
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
