import { DatabaseThread } from "../../database/listenToThreads";
import { User } from "../slices/userSlice";

const convertThread = (
  thread: DatabaseThread,
  loggedOnUser: User,
  users: User[]
) => {
  const awayLoggedOnUser = (userId: string) => userId !== loggedOnUser.id;
  const toUser = (userId: string) => users.find((user) => userId === user.id) as User;
  const otherUsers = thread.members
    .filter(awayLoggedOnUser)
    .map(toUser);

  const firstName = (user: User) => user.name.split(" ")[0];
  const generatedName = otherUsers.map(firstName).join(", ");
  const threadName = thread.name ?? generatedName;

  return {
    id: thread.id,
    name: threadName,
    users: otherUsers,
  };
};

export default convertThread;
