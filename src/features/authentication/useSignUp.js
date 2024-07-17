import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      console.log(user);
      // Handle successful sign up
      toast.success(`Signed up successfully!`);
    },
    onError: (error) => {
      // Handle sign up error
      toast.error(`Failed to sign up. Please try again.`);
    },
  });

  return { signUp, isLoading };
}
