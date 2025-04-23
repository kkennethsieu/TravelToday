import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../services/apiBlogs";

export default function useBlogs() {
  const { isLoading, data: blogs } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogs(),
  });
  return { isLoading, blogs };
}
