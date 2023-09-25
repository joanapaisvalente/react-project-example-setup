import { User } from "../../../common/interface/user";

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className=" p-5 flex flex-col bg-slate-50 rounded-xl my-1 mx-1">
      <h3 className="text-slate-800 font-bold text-base">{user.name}</h3>
      <p className="text-slate-600 font-semibold text-xs">@{user.username}</p>
      <hr />
      <p className="text-slate-800 font-normal text-sm pt-1">{user.email}</p>
      <p className="text-slate-800 font-normal text-sm">{user.phone}</p>
    </div>
  );
};

export default UserCard;
