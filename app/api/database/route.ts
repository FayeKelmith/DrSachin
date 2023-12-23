// Sending information from the any user to the database here
import supabase from "@/supabase";

export const sendMessage = async () => {
  try {
    const { error } = await supabase
      .from("messages")
      .insert([{ name: "test", message: "test", contact: 1234567890 }]);

    console.log(error);
    return error;
  } catch (error) {
    console.log(error);
    return error;
  }
};
