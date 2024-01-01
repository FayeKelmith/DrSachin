// Envoi des informations de tout utilisateur à la base de données ici
import supabase from "@/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  const { data, error } = await supabase.from("messages").insert(body);
  console.log(`Error message: ${res.statusCode}`);
  if (!error) {
    res.statusCode = 200;
  } else {
    res.statusCode = 500;
  }
}
