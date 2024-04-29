import { LoginResponseDTO } from "@/features/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export type LoginRequestDTO = {
  email: string;
  password: string;
};
export const loginWithEmailAndPassword = async (
  loginData: LoginRequestDTO
): Promise<LoginResponseDTO> => {
  return await axios.post("http://localhost:7575/api/v1/auth/login", loginData);
};

export const useLoginPage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: { loginData: LoginRequestDTO }) => {
      const { loginData } = input;
      return loginWithEmailAndPassword(loginData);
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["plans"] });
      }
    },
  });
};
