import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get("status");

  // FILTER
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : {
          field: "status",
          value: filteredValue,
        };
  // SORT

  const sortedBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, dir] = sortedBy.split("-");
  const sortBy = { field, dir };

  // PAGINATE
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    status,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  const totalPages = Math.ceil(count / PAGE_SIZE);
  if (page < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  }
  return { status, bookings, error, count };
}
