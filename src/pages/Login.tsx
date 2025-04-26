import signUpImage from "../assets/sign-up-image.svg";
import { LoginForm } from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <>
      <main className="w-screen h-screen bg-[var(--color-vermilion-50)] grid grid-cols-2">
        <div className="w-full h-full flex justify-center items-center">
          <img src={signUpImage} alt="Imagem da tela de Login" />
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <LoginForm />
        </div>
      </main>
    </>
  );
};

export default Login;
