import { User } from "../../../common/interface/user";
import UserCard from "../user-card/user-card";
import { useTranslation } from "react-i18next";

interface Props {
  usersList?: User[];
}

const UsersList: React.FC<Props> = ({ usersList }) => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-lg font-semibold mb-4">{t("home.main.title")}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
        {usersList?.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </>
  );
};

export default UsersList;
