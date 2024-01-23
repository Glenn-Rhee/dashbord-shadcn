import PageTitle from "@/components/PageTitle";
import CardContent from "@/components/content/CardContent";
import FormSignUp from "@/components/page/signup/FormSignUp";

export default function SignUpPage() {
  return (
    <div className="flex w-full justify-center items-center p-4">
      <CardContent className="w-3/4 md:w-[60%] lg:w-[40%] shadow-2xl">
        <div>
          <PageTitle title="Sign-Up" className="text-center" />
        </div>
        <div>
          <FormSignUp />
        </div>
      </CardContent>
    </div>
  );
}
 