import { UserRole } from "@prisma/client";
import Next, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  // id: string;
  // customFields: string;
  role: UserRole;
  isTwoFactorEnabled: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

// declare module "next-auth/jwt" {
//   /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
//   interface JWT {
//     /** OpenID ID Token */
//     role: "ADMIN" | "USER";
//   }
// }
