import { useGetUsers } from "../../../common/queries/use-get-user";
import UsersList from "../user-list/users-list";
import { useTranslation } from "react-i18next";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const { users, isUsersLoading } = useGetUsers();
  return (
    <>
      {isUsersLoading ? (
        <div className="flex items-center flex-col">
          <div className="h-14 w-14 border-solid border-b-4 border-slate-600 rounded-full animate-spin my-4"></div>
          <div>{t("home.main.loading")}</div>
        </div>
      ) : (
        <UsersList usersList={users} />
      )}
    </>
  );
};
