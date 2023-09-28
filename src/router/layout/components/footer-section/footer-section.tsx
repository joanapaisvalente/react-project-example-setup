interface Props {
  sectionTitle: string;
  sectionLinks: string[];
}

const FooterSection: React.FC<Props> = ({ sectionTitle, sectionLinks }) => {
  return (
    <div className="max-w-1/5 p-3 flex flex-col">
      <h3 className="text-slate-800 font-semibold my-3">{sectionTitle}</h3>
      <ul>
        {sectionLinks.map((link, index) => (
          <li
            key={index}
            className="cursor-pointer text-slate-500 hover:text-slate-800 hover:pl-1 duration-100 ease-in-out"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
