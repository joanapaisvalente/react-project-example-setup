import { useGetUsers } from "../../../common/queries/use-get-user";
import { useTranslation } from "react-i18next";
import UsersList from "../user-list/users-list";

export const Users: React.FC = () => {
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
