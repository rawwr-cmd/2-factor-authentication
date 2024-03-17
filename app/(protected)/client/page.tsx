"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { UserInfo } from "@/components/user-info";

const ClientPage = () => {
  const user = useCurrentUser();
  // console.log(user);
  return <UserInfo user={user} label="📱 Client" />;
};

export default ClientPage;
