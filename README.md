This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Key features



## 🔐 Next-auth v5 (Auth.js)

This repository contains a Next.js application integrated with Next-auth v5, focusing on authentication and authorization features. Below is a breakdown of the features and components included in this project:

## 🚀 Next.js 14 with Server Actions
- Utilizing Next.js 14 for server-side rendering and serverless functions.

## 🔑 Credentials Provider
- Integration of a credentials provider for traditional email/password authentication.

## 🌐 OAuth Provider (Social login with Google & GitHub)
- Implementation of OAuth authentication with Google and GitHub for social login.

## 🔒 Forgot Password Functionality
- Implementation of the forgot password functionality with email verification.

## ✉ Email Verification
- Integration of email verification for new user registration and password reset.

## 📱 Two Factor Verification
- Implementation of two-factor verification for enhanced security.

## 👥 User Roles (Admin & User)
- Support for defining user roles, including Admin and User roles.

## 🔓 Login Component (Opens in Redirect or Modal)
- Flexible login component that can open in a redirect or modal.

## 📝 Register Component
- Registration component for new users.

## 🤔 Forgot Password Component
- Component for initiating the password reset process.

## ✅ Verification Component
- Component for verifying email addresses.

## ⚠️ Error Component
- Component for displaying errors.

## 🔘 Login Button
- UI component for initiating the login process.

## 🚪 Logout Button
- UI component for logging out users.

## 🚧 Role Gate
- Component for controlling access to specific routes or content based on user roles.

## 🔍 Exploring Next.js Middleware
- Exploration of Next.js middleware for handling authentication and authorization logic.

## 📈 Extending & Exploring Next-auth Session
- Extension and exploration of Next-auth session management capabilities.

## 🔄 Exploring Next-auth Callbacks
- Exploration of Next-auth callbacks for handling authentication flows.

## 👤 useCurrentUser Hook
- Custom React hook for accessing the current user data.

## 🛂 useRole Hook
- Custom React hook for accessing the current user's role.

## 🧑 currentUser Utility
- Utility function for retrieving the current user data.

## 👮 currentRole Utility
- Utility function for retrieving the current user's role.

## 🖥️ Example with Server Component
- Example implementation with a server-side rendered component.

## 💻 Example with Client Component
- Example implementation with a client-side rendered component.

## 👑 Render Content for Admins Using RoleGate Component
- Example of rendering content specifically for users with the Admin role using the RoleGate component.

## 🛡️ Protect API Routes for Admins Only
- Implementation of protection for API routes accessible only to users with the Admin role.

## 📧 Change Email with New Verification in Settings Page
- Functionality for changing the user's email address with new email verification.

## 🔑 Change Password with Old Password Confirmation in Settings Page
- Functionality for changing the user's password with confirmation of the old password.

## 🔔 Enable/Disable Two-Factor Auth in Settings Page
- Functionality for enabling or disabling two-factor authentication in the settings page.

## 🔄 Change User Role in Settings Page (For Development Purposes Only)
- Functionality for changing the user's role in the settings page (for development purposes only).

This project aims to provide a comprehensive example of authentication and authorization features using Next.js and Next-auth v5, covering a wide range of scenarios and use cases.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
