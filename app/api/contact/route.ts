import { Json } from "./../../../db_types";
import supabase from "@/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: any) => {
  // const body = await req.body;
  const body = await req.json();
  //console.log(`body: ${JSON.stringify(body)}`);
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
