import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBooking } from "../../services/apiBookings";

export default function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookinId) =>
      updateBooking(bookinId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} checked out successfully`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error("Failed to check out booking");
    },
  });

  return { isCheckingOut, checkout };
}
