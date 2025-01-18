import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function getAuthenticatedUserId(): Promise<string> {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return userId;
}
