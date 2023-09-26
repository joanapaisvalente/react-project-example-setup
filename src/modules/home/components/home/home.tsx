import { useGetUsers } from "../../../common/queries/use-get-user";
import UsersList from "../user-list/users-list";
import { useTranslation } from "react-i18next";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const { users, isUsersLoading } = useGetUsers();
  return (
    <>
      {isUsersLoading ? (
        <div>{t("home.main.loading")}</div>
      ) : (
        <UsersList usersList={users} />
      )}
    </>
  );
};
