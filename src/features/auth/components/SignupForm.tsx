import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { GenderEnum, UserPrefix } from "../types";
import { getObjectKeys } from "@/utils/object";
import { useSignupData } from "../api/signup";

// step 1: add type for form

const UserPrefixDisplayValue = {
  "Mr.": UserPrefix.MR,
  "Mrs.": UserPrefix.MRS,
  "Miss.": UserPrefix.MISS,
};

const DisplayGender = {
  Male: GenderEnum.MALE,
  Female: GenderEnum.FEMALE,
  Other: GenderEnum.OTHER,
  Unspecified: GenderEnum.UNSPECIFIED,
};

type SignupFormValues = {
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

// stpe 2: write schema (validations) for FormType
const schema: yup.ObjectSchema<SignupFormValues> = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  middleName: yup.string().required("Middle Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("invalid email").required("email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should have at least 6 characters"),
  phone: yup.string().required("Phone is required"),
  dateOfBirth: yup.string().required("Date of Birth is required"),
  prefix: yup
    .string()
    .oneOf(Object.values(UserPrefix))
    .required("Prefix is required"),
  gender: yup
    .string()
    .oneOf(Object.values(GenderEnum))
    .required("Gender is required"),
});

// step 3: create fn useFormWithValidation
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useFormWithValidation = () => {
  const form = useForm<SignupFormValues>({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      dateOfBirth: "",
      prefix: UserPrefix.MR,
      gender: GenderEnum.UNSPECIFIED,
    },
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  return { form, register, errors, handleSubmit };
};

// step 4: define the form component
// const Form = () => {...}
const Form = () => {
  const { register, errors, handleSubmit } = useFormWithValidation();
  const createSignUpPage = useSignupData();

  const onSubmit: SubmitHandler<SignupFormValues> = async (
    signupData: SignupFormValues
  ) => {
    await createSignUpPage.mutateAsync({ signupData });
    console.log(signupData);
  };

  const prefixDisplayValues = getObjectKeys(UserPrefixDisplayValue);
  const genderDisplayValues = getObjectKeys(DisplayGender);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          margin: "auto",
        }}
      >
        <Select
          label="Prefix"
          variant="outlined"
          {...register("prefix")}
          error={!!errors.prefix}
          sx={{ mb: 2, mt: 2 }}
        >
          {prefixDisplayValues.map((displayValue) => (
            <MenuItem
              key={displayValue}
              value={UserPrefixDisplayValue[displayValue]}
            >
              {displayValue}
            </MenuItem>
          ))}
        </Select>
        <Select
          label="Gender"
          variant="outlined"
          {...register("gender")}
          error={!!errors.gender}
          sx={{ mb: 2, mt: 2 }}
        >
          {genderDisplayValues.map((displayValue) => (
            <MenuItem key={displayValue} value={DisplayGender[displayValue]}>
              {displayValue}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="First Name"
          variant="outlined"
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName ? errors.firstName.message : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Middle Name"
          variant="outlined"
          {...register("middleName")}
          error={!!errors.middleName}
          helperText={errors.middleName ? errors.middleName.message : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Last Name"
          variant="outlined"
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName ? errors.lastName.message : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Email"
          variant="outlined"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Phone"
          variant="outlined"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone ? errors.phone.message : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Date of Birth"
          variant="outlined"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("dateOfBirth")}
          error={!!errors.dateOfBirth}
          helperText={errors.dateOfBirth ? errors.dateOfBirth.message : ""}
          sx={{ mb: 2 }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

// step 5: add component prop type.
// These Props are passed from routes or other calling components
type Props = {
  onSuccess: () => void;
};

// step 6: Component to be exported.
// Keep the code in this component short - it should serve as top level for smaller components
// export const Sample: React.FC<Props> = ({destructure props here}) => {...}
export const SignupForm: React.FC<Props> = () => {
  return <Form />;
};
