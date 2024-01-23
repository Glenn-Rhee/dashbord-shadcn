import ContainerAuth from "@/components/ContainerAuth";
import PageTitle from "@/components/PageTitle";
import FormSignUp from "@/components/page/signup/FormSignUp";

export default function SignUpPage() {
  return (
    <ContainerAuth>
      <div>
        <PageTitle title="Sign-Up" className="text-center" />
      </div>
      <div>
        <FormSignUp />
      </div>
    </ContainerAuth>
  );
}
