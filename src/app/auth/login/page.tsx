"use client";
import ContainerAuth from "@/components/ContainerAuth";
import PageTitle from "@/components/PageTitle";
import FormLogin from "@/components/page/login/FormLogin";
import { useRouter } from "next/navigation";
import { cookies } from "@/lib/Cookies";

export default function LoginPage() {
  const router = useRouter();
  const token = cookies.get("qwpt");
  if (token) {
    router.push("/");
  }

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
