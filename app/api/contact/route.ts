import { Json } from "./../../../db_types";
// Envoi des informations de tout utilisateur à la base de données ici
import supabase from "@/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: NextApiRequest) => {
  const body = await req.json();

  // console.log(`Received message: ${JSON.stringify(body)}`);

  try {
    const { error } = await supabase.from("messages").insert(body);

    if (!error) {
      return new Response(JSON.stringify(body), { status: 201 });
    } else {
      return new Response(JSON.stringify(error), { status: 500 });
    }
  } catch (err) {
    return new Response("Failed to send message", { status: 500 });
  }
};
