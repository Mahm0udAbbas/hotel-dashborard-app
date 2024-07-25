import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import {
  getBookingsAfterDate,
  getStaysAfterDate,
} from "../../services/apiBookings";

export function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const querydate = subDays(new Date(), numDays).toISOString();

  const {
    data: stays,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recent-stays", numDays],
    queryFn: () => getStaysAfterDate(querydate),
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stays.status === "checked-out"
  );

  return { stays, confirmedStays, isLoading, error, numDays };
}
