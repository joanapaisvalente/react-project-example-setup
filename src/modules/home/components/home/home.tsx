import { useGetUsers } from "../../../common/queries/use-get-user";
import UsersList from "../user-list/users-list";

export const Home: React.FC = () => {
  const { users, isUsersLoading } = useGetUsers();
  return (
    <>
      {isUsersLoading ? <div>Loading...</div> : <UsersList usersList={users} />}
    </>
  );
};
