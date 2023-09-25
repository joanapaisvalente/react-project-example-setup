import FooterSection from "./components/footer-section/footer-section";

const footerInformation = [
  {
    title: "Our company",
    links: ["About us", "Our services", "Privacy policy"],
  },
  {
    title: "Get help",
    links: ["FAQ", "Shipping information", "Returns policy", "Payment options"],
  },
  { title: "Follow us", links: ["Instagram", "Facebook", "Twitter"] },
];

const Footer = () => {
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
