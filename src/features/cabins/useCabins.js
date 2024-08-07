import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    status,
    data: cabins,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { status, cabins, error, isLoading };
}
