import ContainerAuth from "@/components/ContainerAuth";
import PageTitle from "@/components/PageTitle";
import FormLogin from "@/components/page/login/FormLogin";

export default function LoginPage() {
  return (
    <ContainerAuth>
      <div>
        <PageTitle title="Login" className="text-center" />
      </div>
      <div>
        <FormLogin />
      </div>
    </ContainerAuth>
  );
}
