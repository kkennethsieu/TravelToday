import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../../services/apiBlogs";

export default function useBlogById(id) {
  const {
    isLoading,
    data: blog,
    error,
  } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
  });

  return { isLoading, blog, error };
}
