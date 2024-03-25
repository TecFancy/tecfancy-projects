import React from "react";
import { redirect } from "next/navigation";

interface JSONProps {
  id: number;
  name: string;
}

interface FetchTeamResultProps {
  ok: boolean;
  json: () => JSONProps;
}

async function fetchTeam(): Promise<JSONProps | undefined> {
  const res: FetchTeamResultProps = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: false,
        json: () => ({
          id: 1,
          name: "Team 1",
        }),
      });
    }, 1000);
  });

  if (!res.ok) return undefined
  return res.json()
}

export default async function RedirectPage() {
  const team = await fetchTeam();

  if (!team) redirect("/");

  return (
    <div>
      <h1>Redirect Page</h1>
      <p>TEAM: {team?.name}</p>
    </div>
  );
};
