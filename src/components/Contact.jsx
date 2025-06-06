import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";
import { FaEnvelope, FaPhone, FaIdCard } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { validate } from "email-validator";
import countryCodes from "../utils/countryCodes";
import SocialLinks from "./SocialLinks";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Contact = () => {
  const controls = useAnimation();
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState({});
  const [charCount, setCharCount] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const isValid =
      formData.firstName &&
      formData.lastName &&
      validate(formData.email) &&
      formData.countryCode &&
      formData.phoneNumber &&
      formData.subject &&
      formData.message;
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let formattedValue = value;
    if (id === "phoneNumber") {
      formattedValue = formatPhoneNumber(value);
    }
    if (id === "message") {
      setCharCount(value.length);
    }

    setFormData((prev) => ({
      ...prev,
      [id]: formattedValue,
    }));
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      setLoading(true);
      setCompleted(false);

      controls.start({
        strokeDashoffset: [100, 0],
        stroke: ["#f00", "#ff0", "#0f0"],
        transition: { duration: 2 },
      });

      try {
        await axios.post(`${VITE_SERVER_URL}/contact`, formData);
        controls.start({
          strokeDashoffset: 0,
          strokeDasharray: "0 100",
          stroke: "#0f0",
          transition: { duration: 0.5 },
        });
        setCompleted(true);
      } catch (error) {
        setError(true);
        controls.start({
          stroke: "#f00",
          transition: { duration: 0.5 },
        });
        setCompleted(false);
        setTimeout(() => setError(false), 3000);
      } finally {
        setLoading(false);
      }
    } else {
      setTouched({
        firstName: true,
        lastName: true,
        email: true,
        phoneNumber: true,
        subject: true,
        message: true,
      });
    }
  };

  const isFieldInvalid = (fieldName) => {
    return (
      (touched[fieldName] && !formData[fieldName]) ||
      (fieldName === "email" &&
        touched[fieldName] &&
        !validate(formData[fieldName]))
    );
  };

  const formatPhoneNumber = (input) => {
    input = input.replace(/\D/g, "");

    if (input.length > 10) {
      input = input.slice(0, 10);
    }

    let formatted = "";
    if (input.length > 0) {
      formatted = `(${input.slice(0, 3)}`;
    }
    if (input.length > 3) {
      formatted += `) ${input.slice(3, 6)}`;
    }
    if (input.length > 6) {
      formatted += `-${input.slice(6, 10)}`;
    }

    return formatted;
  };

  return (
    <>
      <div className="relative">
        <form
          className={`relative rounded-xl border-[1px] border-gray-500 bg-[#202124] p-6 shadow-xl ${loading || completed ? "opacity-30" : "opacity-100"}`}
          onSubmit={handleSend}
        >
          <div className="mb-5 flex flex-col items-center py-10 text-4xl font-semibold sm:text-xl">
            <h1>Let's Work Together!</h1>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:w-1/2">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <FaIdCard className="size-4 text-[#cccccc]" />
                </div>
                <input
                  className={`mb-3 block w-full rounded border py-3 pl-10 leading-tight text-white focus:outline-[1px] focus:outline-gray-500 ${
                    isFieldInvalid("firstName")
                      ? "border-red-500"
                      : "border-[#0f1217]"
                  } focus:outline-none`}
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange(e, "First Name")}
                  onBlur={handleBlur}
                  required
                  disabled={loading || completed}
                />
              </div>
              {isFieldInvalid("firstName") && (
                <p className="text-xs italic text-red-500">
                  Please provide your first name.
                </p>
              )}
            </div>
            <div className="mb-6 w-full px-3 md:w-1/2">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <FaIdCard className="size-4 text-[#cccccc]" />
                </div>
                <input
                  className={`mb-3 block w-full rounded border py-3 pl-10 leading-tight text-white focus:outline-[1px] focus:outline-gray-500 ${
                    isFieldInvalid("lastName")
                      ? "border-red-500"
                      : "border-[#0f1217]"
                  } focus:outline-none`}
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange(e, "Last Name")}
                  onBlur={handleBlur}
                  required
                  disabled={loading || completed}
                />
              </div>
              {isFieldInvalid("lastName") && (
                <p className="text-xs italic text-red-500">
                  Please provide your last name.
                </p>
              )}
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:w-1/3">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <FaEnvelope className="size-4 text-[#cccccc]" />
                </div>
                <input
                  className={`mb-3 block w-full rounded border py-3 pl-10 leading-tight text-white focus:outline-[1px] focus:outline-gray-500 ${
                    isFieldInvalid("email")
                      ? "border-red-500"
                      : "border-[#0f1217]"
                  } focus:outline-none`}
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, "Email")}
                  onBlur={handleBlur}
                  required
                  disabled={loading || completed}
                />
              </div>
              {isFieldInvalid("email") && (
                <p className="text-xs italic text-red-500">
                  Please provide a valid email.
                </p>
              )}
            </div>
            <div className="mb-6 w-full px-3 md:w-1/3">
              <select
                className={`mb-3 block w-full rounded border px-4 py-[.60rem] leading-tight text-white focus:outline-[1px] focus:outline-gray-500 ${
                  isFieldInvalid("countryCode")
                    ? "border-red-500"
                    : "border-[#0f1217]"
                } focus:outline-none`}
                id="countryCode"
                value={formData.countryCode}
                onChange={(e) => handleInputChange(e, "Country Code")}
                onBlur={handleBlur}
                required
                disabled={loading || completed}
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} ({country.code})
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6 w-full px-3 md:w-1/3">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <FaPhone className="size-4 text-[#cccccc]" />
                </div>
                <input
                  className={`mb-3 block w-full rounded border py-3 pl-10 leading-tight text-white focus:outline-[1px] focus:outline-gray-500 ${
                    isFieldInvalid("phoneNumber")
                      ? "border-red-500"
                      : "border-[#0f1217]"
                  } focus:outline-none`}
                  id="phoneNumber"
                  type="tel"
                  placeholder="(---) --- ----"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange(e, "Phone Number")}
                  onBlur={handleBlur}
                  required
                  disabled={loading || completed}
                />
              </div>
              {isFieldInvalid("phoneNumber") && (
                <p className="text-xs italic text-red-500">
                  Please provide a phone number.
                </p>
              )}
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="mb-6 w-full px-3">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <MdModeEdit className="size-5 text-[#cccccc]" />
                </div>
                <input
                  className={`mb-3 block w-full rounded border py-3 pl-10 leading-tight text-white focus:outline-[1px] focus:outline-gray-500 ${
                    isFieldInvalid("subject")
                      ? "border-red-500"
                      : "border-[#0f1217]"
                  } focus:outline-none`}
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange(e, "Subject")}
                  onBlur={handleBlur}
                  required
                  disabled={loading || completed}
                />
              </div>
              {isFieldInvalid("subject") && (
                <p className="text-xs italic text-red-500">
                  Please provide a subject.
                </p>
              )}
            </div>
          </div>
          <div className="-mx-3 flex h-full flex-wrap">
            <div className="mb-6 w-full px-3">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 top-3 flex ps-3">
                  <MdModeEdit className="size-5 text-[#cccccc]" />
                </div>
                <textarea
                  className={`mb-3 block w-full resize-none rounded border py-3 pl-10 leading-tight text-white focus:outline-[1px] focus:outline-gray-500 ${
                    isFieldInvalid("message")
                      ? "border-red-500"
                      : "border-[#0f1217]"
                  } focus:outline-none`}
                  id="message"
                  rows={10}
                  maxLength={500}
                  value={formData.message}
                  onChange={(e) => handleInputChange(e, "message")}
                  onBlur={handleBlur}
                  placeholder="Message"
                  disabled={loading || completed}
                  required
                />
              </div>
              <div className="flex justify-between">
                <div>
                  {isFieldInvalid("message") && (
                    <p className="text-xs italic text-red-500">
                      Please provide a message.
                    </p>
                  )}
                </div>
                <div className="text-right text-xs text-[#cccccc]">
                  {charCount}/500
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className={`h-10 w-36 animate-pulse rounded-md bg-[#cccccc] text-sm text-black hover:animate-none hover:bg-[#ffffff] ${
                (!isFormValid || loading || completed) &&
                "cursor-not-allowed opacity-50"
              }`}
              disabled={!isFormValid || loading || completed}
            >
              Send Message
            </button>
          </div>
        </form>
        <div
          className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center ${
            loading || completed || error ? "flex" : "hidden"
          }`}
        >
          <motion.div className="flex size-64 flex-col items-center justify-center rounded-2xl border border-[#606064] bg-[#232323]">
            <h1 className="h-1/5">
              {!completed && !error
                ? "Sending..."
                : completed
                  ? "Message Sent"
                  : "Error"}
            </h1>
            <motion.svg width="100" height="100" viewBox="0 0 100 100">
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                strokeWidth="5"
                stroke="#ddd"
                fill="none"
                initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                animate={controls}
              />
              {completed && (
                <motion.path
                  d="M34 50 L45 60 L66 40"
                  fill="none"
                  stroke="#0f0"
                  strokeWidth="5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
              {error && (
                <motion.path
                  d="M30 30 L70 70 M70 30 L30 70"
                  fill="none"
                  stroke="#f00"
                  strokeWidth="5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.svg>
          </motion.div>
        </div>
      </div>
      <SocialLinks size={40} />
    </>
  );
};

export default Contact;
