import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  if (draftMode().isEnabled) {
    draftMode().disable();
  } else {
    draftMode().enable();
  }
  redirect("/");
}
