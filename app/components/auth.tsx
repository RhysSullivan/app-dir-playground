import { headers } from "next/headers";
export async function Auth() {
  const authCookie = headers();
  console.log(authCookie);
  await new Promise((resolve) => setTimeout(resolve, 200));
  return (
    <div
      style={{
        borderRadius: "1rem",
        padding: "1rem",
        background: "white",
        boxShadow: "0 0 1rem #00000030",
      }}
    >
      <h1>Authed</h1>
      <p>Auth</p>
    </div>
  );
}
