import { useState } from "react";
import useStore from "../../../../store/store";

const NewsLetterSection: React.FC = () => {
  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const { setName, setEmail } = useStore();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setName(UserName);
          setEmail(UserEmail);
        }}
      >
        <h1>Want to subscribe to our newsletter?</h1>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={UserName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          value={UserEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewsLetterSection;
