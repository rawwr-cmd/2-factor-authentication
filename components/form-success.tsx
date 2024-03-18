import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message: string | undefined;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 text-sm text-emerald-500 bg-emerald-100 p-3 rounded-md">
      <CheckCircledIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
