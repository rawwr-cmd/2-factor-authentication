import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";

const ServerPage = async () => {
  const user = await currentUser();
  // console.log(user);
  return <UserInfo user={user} label="💻 Server" />;
};

export default ServerPage;
