import { LogOut } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export const Header: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <>
      <header className="w-full flex items-center justify-between px-6 py-8 bg-[var(--color-vermilion-50)] shadow-md">
        <a href="/home">
          <h1 className="text-2xl font-bold text-[var(--color-vermilion-500)] hover:text-[var(--color-vermilion-700)] transition-all">
            To-Do List
          </h1>
        </a>

        <div className="flex items-center gap-4">
          <span className="text-[var(--color-vermilion-950)] text-sm md:text-base">
            Olá, <span className="font-semibold">{user.name}</span>!
          </span>

          <button
            onClick={logout}
            className="flex items-center gap-1 px-3 py-1.5 bg-[var(--color-vermilion-500)] hover:bg-[var(--color-vermilion-700)] text-white text-sm rounded-xl transition-all"
          >
            <LogOut size={18} />
            Sair
          </button>
        </div>
      </header>
    </>
  );
};
