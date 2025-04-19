import { UseFormRegisterReturn } from "react-hook-form";

export interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  error?: string;
  registration: UseFormRegisterReturn;
}
