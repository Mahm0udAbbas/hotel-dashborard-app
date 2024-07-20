import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      toast.success("User updated successfully");
      queryClient.invalidateQueries(["user"]);
    },
    onError: () => {
      toast.error("Failed to update user");
    },
  });
  return { updateUser, isUpdating };
}
