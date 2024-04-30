import { GenderEnum, LoginResponseDTO, UserPrefix } from "@/features/auth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export type SignUpRequestDTO = {
  prefix: UserPrefix;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: GenderEnum;
  password: string;
  dateOfBirth: string;
  middleName: string;
};
export const signupWithEmailAndPassword = (
  data: SignUpRequestDTO
): Promise<LoginResponseDTO> => {
  return axios.post("http://localhost:7575/api/v1/auth/signup", data);
};

export const useSignupData = () => {
  return useMutation({
    mutationFn: (input: { signupData: SignUpRequestDTO }) => {
      const { signupData } = input;
      return signupWithEmailAndPassword(signupData);
    },
  });
};
