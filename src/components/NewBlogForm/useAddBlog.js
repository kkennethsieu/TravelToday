import { useMutation } from "@tanstack/react-query";
import { addBlog } from "../../services/apiBlogs";

export function useAddBlog() {
  const mutation = useMutation({
    mutationFn: async ({ newBlog, imgFile }) => {
      return await addBlog(newBlog, imgFile);
    },
    onSuccess: (data) => {
      console.log("Blog added successfully", data);
    },
    onError: (error) => {
      console.error("Error adding blog:", error.message);
    },
  });

  return mutation;
}
