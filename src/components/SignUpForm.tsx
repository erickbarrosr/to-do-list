import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { PasswordInput } from "./PasswordInput";
import { AuthService } from "../services";

const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+{}\\[\\]:;<>,.?~\\\\/-]).{8,}$"
);

const signUpSchema = z
  .object({
    name: z.string().min(3, "Nome precisa ter pelo menos 3 letras!"),
    email: z.string().email("E-mail inválido!"),
    password: z
      .string()
      .min(8, "Senha precisa ter pelo menos 8 caracteres!")
      .regex(
        passwordRegex,
        "Senha deve conter ao menos 1 letra maiúscula, 1 número e 1 caractere especial!"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem!",
    path: ["confirmPassword"],
  });

type SignUpData = z.infer<typeof signUpSchema>;

export const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    mode: "all",
  });

  const onSubmit = async (data: SignUpData) => {
    try {
      await AuthService.register(data);

      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      if (error instanceof Error && "response" in error) {
        const err = error as { response?: { data?: { message?: string } } };
        const errorMessage =
          err.response?.data?.message || "Erro ao cadastrar. Tente novamente.";

        toast.error(errorMessage);
      } else {
        toast.error("Erro inesperado. Tente novamente.");
      }

      console.error(error);
    } finally {
      reset();
    }
  };

  return (
    <div className="w-full max-w-md bg-gradient-to-t from-white to-[var(--color-vermilion-50)] rounded-[40px] p-8 border-4 border-white shadow-[0px_30px_30px_-20px_var(--color-vermilion-200)] m-5">
      <h2 className="text-center font-black text-2xl text-[color:var(--color-vermilion-700)]">
        Faça o seu cadastro
      </h2>

      <form noValidate onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <input
          {...register("name")}
          placeholder="Nome"
          className="w-full bg-white p-4 rounded-2xl mt-4 shadow-[0_10px_10px_-5px_#ffe8c2] border-x-2 border-transparent focus:outline-none focus:border-[var(--color-vermilion-500)] placeholder:text-gray-400"
        />
        {errors.name && (
          <p className="text-xs text-red-500 mt-1 ml-2">
            {errors.name.message}
          </p>
        )}

        <input
          {...register("email")}
          placeholder="E-mail"
          type="email"
          className="w-full bg-white p-4 rounded-2xl mt-4 shadow-[0_10px_10px_-5px_#ffe8c2] border-x-2 border-transparent focus:outline-none focus:border-[var(--color-vermilion-500)] placeholder:text-gray-400"
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1 ml-2">
            {errors.email.message}
          </p>
        )}

        <PasswordInput
          placeholder="Digite sua senha"
          registration={register("password")}
          error={errors.password?.message}
        />

        <PasswordInput
          placeholder="Repita sua senha"
          registration={register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <button
          type="submit"
          className="w-full font-bold bg-gradient-to-r from-[var(--color-vermilion-500)] to-[var(--color-vermilion-600)] text-white py-4 mt-6 rounded-2xl shadow-[0px_20px_10px_-15px_rgba(255,166,50,0.5)] hover:scale-105 transition-transform"
        >
          Cadastrar
        </button>
      </form>

      <span className="block text-center mt-6 text-xs text-gray-400">
        Já tem uma conta?{" "}
        <a href="/login" className="text-[var(--color-vermilion-600)]">
          Faça o seu login
        </a>
        !
      </span>
    </div>
  );
};
