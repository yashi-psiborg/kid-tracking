"use client";
import InputField from "@/components/fields/InputField";
import Default from "@/components/auth/variants/DefaultAuthLayout";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "@/components/checkbox";
import PhoneInput from "react-phone-input-2";

function SignInDefault() {
  return (
    <Default
      maincard={
        <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
          {/* Sign in section */}
          <div className="mt-[5vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
            <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
              Sign In
            </h3>
            <p className="mb-9 ml-1 text-base text-gray-600">
              Enter your email and password to sign in!
            </p>
            {/* <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white">
              <div className="rounded-full text-xl">
                <FcGoogle />
              </div>
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                Sign In with Google
              </p>
            </div>
            <div className="mb-6 flex items-center  gap-3">
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
              <p className="text-base text-gray-600"> or </p>
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
            </div> */}
            {/* Name */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Name*"
              placeholder="Jon Doe"
              id="name"
              type="text"
            />

            {/* Phone Number */}
            <label
              htmlFor={"phoneNumber"}
              className={`text-sm text-navy-700 dark:text-white ml-1.5 font-medium
        `}
            >
              Phone Number*
            </label>
            <PhoneInput
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
                className:
                  "pl-12 mt-2 mb-4 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none",
              }}
              onlyCountries={["in"]}
              inputClass="w-full h-12"
              buttonClass={"rounded-xl"}
              country="in"
            />
            {/* What'sapp Number */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Whatsapp Number*"
              placeholder="Min. 8 characters"
              id="phone"
              type="text"
            />
            {/* Checkbox */}
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="mt-2 flex items-center">
                <Checkbox />
                <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                  Keep me logged In
                </p>
              </div>
              <a
                className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                href=" "
              >
                Forgot Password?
              </a>
            </div>
            <button className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Sign In
            </button>
            <div className="mb-6 mt-6 flex items-center  gap-3">
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
              <p className="text-base text-gray-600"> or </p>
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
            </div>
            <div className="mt-4 text-center">
              <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
                You are new here?
              </span>
              <a
                href="/auth/sign-up/default"
                className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              >
                Create an account
              </a>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default SignInDefault;
