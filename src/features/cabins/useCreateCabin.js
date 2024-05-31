import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
// import { useForm } from "react-hook-form";

export function useCreateCabin() {
  //   const { reset } = useForm({
  //     defaultValues: isEditSession ? editValues : {},
  //   });
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isAdding } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New Cabin successfully added");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      //   reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isAdding, createCabin };
}
