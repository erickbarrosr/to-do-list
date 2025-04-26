import signUpImage from "../assets/sign-up-image.svg";
import { SignUpForm } from "../components/SignUpForm";

const SignUp: React.FC = () => {
  return (
    <>
      <main className="w-screen h-screen bg-[var(--color-vermilion-50)] grid grid-cols-2">
        <div className="w-full h-full flex justify-center items-center">
          <img src={signUpImage} alt="Imagem da tela de cadastro" />
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <SignUpForm />
        </div>
      </main>
    </>
  );
};

export default SignUp;
