import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { PasswordInputProps } from "../types";

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  placeholder = "Senha",
  error,
  registration,
}: PasswordInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-4">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          {...registration}
          className="w-full bg-white p-4 pr-12 rounded-2xl shadow-[0_10px_10px_-5px_#ffe8c2] border-x-2 border-transparent focus:outline-none focus:border-[var(--color-vermilion-500)] placeholder:text-gray-400"
        />

        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && <p className="text-xs text-red-500 mt-1 ml-2">{error}</p>}
    </div>
  );
};
