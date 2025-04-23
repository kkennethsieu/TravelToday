import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlog as deleteBlogApi } from "../../services/apiBlogs";

export default function useDeleteBlog() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteBlogApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
    },
    onError: (error) => {
      console.error("Error deleting blog:", error);
    },
  });

  return {
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
    deleteBlog: mutation.mutate,
  };
}
