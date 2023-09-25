import axios from "axios";
import { User } from "../../modules/common/interface/user";

export class UserService {
  static async getAll() {
    const path = "https://jsonplaceholder.typicode.com/users";

    const { data } = await axios.get<User[]>(path);

    return data;
  }
}
