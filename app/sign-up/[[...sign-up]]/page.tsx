import { SignUp } from "@clerk/nextjs";

export const runtime = 'edge';
export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
}
