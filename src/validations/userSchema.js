import * as Yup from "yup"

export const userSchema = Yup.object({

    firstName: Yup.string().min(3, "At least three characters").required("First name is required"),
    lastName: Yup.string().min(3, "At least three characters").required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters")
        .required("Password is required")
        .matches(/[A-Z]/, "Password must contain at least one upperCase letter")
        .matches(/[a-z]/, "Password must contain at least one lowerCase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[@!#$%&*?]/, "Password must contain at least one special character"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Your password and confirm password are not same")
        .required("Confirm password is required"),
    city: Yup.string().min(3, "City name contain at least three characters").required("City is required"),
    age: Yup.number().min(18, "Age must be more than 18").required("Age is required"),
    phoneNumber: Yup.string()
        .matches(/^[0-9]{11}$/, "Phone number must be exactly 11 digits")
        .required("Phone number is required"),
    date: Yup.date().required("Date is required"),
    select: Yup.string()
        .required("Please select an option")
        .notOneOf([""], "Please select an option"),
    description: Yup.string().min(15, "Write at least 150 characters").required("Description is required"),
    terms: Yup.boolean()
        .oneOf([true], "You must accept the terms"),
    profilePicture: Yup.mixed()
        .required("File is required")
        .test('FileSize', 'File too large', (value) => value && value.size <= 2 * 1024 * 1024)
        .test('fileType', 'Unsupported format', (value) =>
            value && ["image/jpeg", "image/png"].includes(value.type))
})