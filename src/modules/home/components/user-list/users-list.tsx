import { User } from "../../../common/interface/user";
import UserCard from "../user-card/user-card";

interface Props {
  usersList?: User[];
}

const UsersList: React.FC<Props> = ({ usersList }) => {
  return (
    <>
      <h1 className="text-lg font-semibold mb-4">
        Users who have used our service:
      </h1>
      <div className="grid grid-cols-3">
        {usersList?.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </>
  );
};

export default UsersList;
