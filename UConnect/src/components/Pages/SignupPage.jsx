// src/components/SignupPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(false); // State to track if passwords match
  const [emailValid, setEmailValid] = useState(true); // State to track if email is valid
  const [passwordValid, setPasswordValid] = useState(true); // State to track if password is valid
  const [submitted, setSubmitted] = useState(false); // State to track if the form has been submitted

  const navigate = useNavigate(); // Navigation function

  // Regular expression for password validation
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Regular expressions for individual password checks
  const lengthRegex = /.{8,}/; // At least 8 characters
  const upperCaseRegex = /[A-Z]/; // At least one uppercase letter
  const lowerCaseRegex = /[a-z]/; // At least one lowercase letter
  const numberRegex = /\d/; // At least one number
  const specialCharRegex = /[@$!%*?&]/; // At least one special character

  // Regular expression for email validation
  const emailRegex = /@ucalgary\.ca$/;

  // Toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error messages when user starts typing
    if (name === "email") setEmailValid(true);
    if (name === "password" || name === "confirmPassword")
      setPasswordValid(true);

    // If user is typing in confirmPassword, check if passwords match
    if (name === "confirmPassword") {
      setPasswordsMatch(value === formData.password);
    }

    // If user is typing in password, also check if confirmPassword matches
    if (name === "password") {
      setPasswordsMatch(value === formData.confirmPassword);
    }
  };

  // Handle form submission
  const handleSignup = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set submitted state to true when the form is submitted

    const { email, password, confirmPassword } = formData;

    // Validate all fields are filled
    if (!email || !password || !confirmPassword) {
      // If email is empty, set emailValid to false
      if (!email) {
        setEmailValid(false);
        return;
      }
    }

    // Validate email ends with "@ucalgary.ca"
    if (!emailRegex.test(email)) {
      console.log("email");
      setEmailValid(false); // Set email valid state to false
      return;
    }

    // Validate password strength
    if (!passwordRegex.test(password)) {
      setPasswordValid(false); // Set password valid state to false
      console.log("Password");
      return;
    }

    if (!passwordsMatch) {
      console.log("Password match");
      return; // Prevent form submission if passwords do not match
    }
    // If all validations pass, navigate to profile creation
    navigate("/create-profile");
  };

  // Password validation states for each rule
  const passwordCriteria = {
    length: lengthRegex.test(formData.password),
    uppercase: upperCaseRegex.test(formData.password),
    lowercase: lowerCaseRegex.test(formData.password),
    number: numberRegex.test(formData.password),
    specialChar: specialCharRegex.test(formData.password),
  };

  return (
    <div className="w-full max-w-md text-center">
      <form onSubmit={handleSignup} className="text-left flex flex-col gap-5">
        <div>
          <InputField
            label="UCalgary Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {/* Show error message if email is invalid */}
          {submitted && !emailValid && (
            <div className="mt-2 text-sm text-red-500">
              {formData.email === ""
                ? "Email is required."
                : "Please enter a valid @ucalgary.ca email address."}
            </div>
          )}
        </div>
        <div>
          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            togglePassword={togglePassword}
            required
          />
          {submitted &&
            (!passwordCriteria.length ||
              !passwordCriteria.uppercase ||
              !passwordCriteria.lowercase ||
              !passwordCriteria.number ||
              !passwordCriteria.specialChar) && (
              <div className="mt-2 text-sm dark:text-uConnectDark-textSub">
                Password must be:
              </div>
            )}

          {/* Show password criteria only if the form is submitted */}
          {submitted &&
            (!passwordCriteria.length ||
              !passwordCriteria.uppercase ||
              !passwordCriteria.lowercase ||
              !passwordCriteria.number ||
              !passwordCriteria.specialChar) && (
              <div className=" text-sm">
                <div
                  className={
                    passwordCriteria.length ? "text-green-500" : "text-red-500"
                  }
                >
                  At least 8 characters long
                </div>
                <div
                  className={
                    passwordCriteria.uppercase
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  Include at least one uppercase letter
                </div>
                <div
                  className={
                    passwordCriteria.lowercase
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  Include at least one lowercase letter
                </div>
                <div
                  className={
                    passwordCriteria.number ? "text-green-500" : "text-red-500"
                  }
                >
                  Include at least one number
                </div>
                <div
                  className={
                    passwordCriteria.specialChar
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  Include at least one special character (@$!%*?&)
                </div>
              </div>
            )}
        </div>
        <div>
          <InputField
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            togglePassword={togglePassword}
            required
          />

          {/* Password Match Message */}
          {(formData.confirmPassword || submitted) && (
            <div className="mt-2 text-sm">
              {passwordsMatch ? (
                <span className="text-green-500">Passwords match!</span>
              ) : (
                <span className="text-red-500">Passwords do not match.</span>
              )}
            </div>
          )}
        </div>
        <button type="submit" className="login_signup_button w-full mt-6">
          SIGN UP
        </button>
      </form>
    </div>
  );
}
