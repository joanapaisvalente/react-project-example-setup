import { useState } from "react";
import useStore from "../../../../store/store";

const NewsLetterSection: React.FC = () => {
  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const { setName, setEmail } = useStore();

  return (
    <div className="flex justify-center my-10">
      <div className="w-full sm:w-3/4 lg:w-2/4 bg-slate-50 p-6 rounded-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setName(UserName);
            setEmail(UserEmail);
          }}
        >
          <h1 className="text-lg font-semibold text-slate-800 my-4 whitespace-normal">
            Want to subscribe to our newsletter?
          </h1>
          <div className="flex flex-col my-4">
            <label htmlFor="name" className="mb-2">
              Name:
            </label>
            <input
              id="name"
              type="text"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="email" className="mb-2">
              Email:
            </label>
            <input
              id="email"
              type="text"
              value={UserEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-slate-700 text-slate-100 py-2 px-5 rounded-md font-semibold hover:px-6 ease-in-out duration-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterSection;
