import { SignIn } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const runtime = 'edge';

export default async function SignInPage() {
  const { userId } = await auth();
  if (userId) {
    redirect('/dashboard');
  }

	return (
		<div className="min-h-screen flex items-center justify-center">
			<SignIn />
		</div>
	);
}
