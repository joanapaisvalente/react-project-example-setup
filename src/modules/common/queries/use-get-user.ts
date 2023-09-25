import { toast } from "react-toastify";
import { UserService } from "../../../service/user-service/user.service";
import { useQuery } from "react-query";

export const useGetUsers = () => {
  const { data, isLoading, error } = useQuery(
    ["useGetUsers"],
    () => UserService.getAll(),
    {
      onError: () => {
        toast.error("Something went wrong fetching users list!");
      },
    },
  );

  return {
    users: data,
    isUsersLoading: isLoading,
    usersError: error,
  };
};
