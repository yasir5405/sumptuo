import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { useState } from "react";
import { login, loginWithGoogle, type LoginParams } from "@/api/auth.api";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/context/AuthContext";
import { useGoogleLogin, type CodeResponse } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { isValid, errors },
  } = useForm<LoginParams>({
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleError, setGoogleError] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  const { refreshUser } = useAuth();

  const handleLogin: SubmitHandler<LoginParams> = async (data: LoginParams) => {
    setLoading(true);

    try {
      const res = await login(data);

      if (!res.success) {
        const message = res.error?.message ?? res.message;

        if (message.toLocaleLowerCase().includes("email")) {
          setError("email", {
            type: "server",
            message,
          });
        } else if (message.toLocaleLowerCase().includes("password")) {
          setError("password", {
            type: "server",
            message,
          });
        } else {
          setError("root", {
            type: "server",
            message,
          });
        }

        setLoading(false);
        return;
      }

      localStorage.setItem("access-token", String(res.data?.accessToken));
      // toast.success(res.message);
      await refreshUser();
      navigate("/dashboard");
    } catch (error) {
      setError("root", {
        type: "server",
        message: "Network error. Please try again.",
      });
      toast.error("Network error or server unreachable");
      console.log("Unexpected error", error);
      console.log("Network error or server unreachable");
    } finally {
      setLoading(false);
    }
  };

  const googleResponse = async (
    authResult: Omit<CodeResponse, "error" | "error_description" | "error_uri">,
  ) => {
    try {
      if (authResult["code"]) {
        const code = authResult["code"];
        const res = await loginWithGoogle(code);

        if (!res.success) {
          const message = res.error?.message ?? res.message;

          setGoogleError(message);
          return;
        }

        localStorage.setItem("access-token", String(res.data?.accessToken));
        // toast.success(res.message);
        await refreshUser();
        navigate("/dashboard");
      } else {
        setGoogleError("Google login failed. Please try again.");
      }
    } catch (error) {
      console.log("Google login failed. ", error);
      toast.error("Network error or server unreachable");
      console.log("Unexpected error", error);
      console.log("Network error or server unreachable");
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleGoogleError = (
    error: Pick<CodeResponse, "error" | "error_description" | "error_uri">,
  ) => {
    console.error("Google login error:", error);

    setGoogleLoading(false);

    setGoogleError(
      error.error_description || "Google login cancelled or failed",
    );
  };

  const googleLogin = useGoogleLogin({
    onSuccess: googleResponse,
    onError: handleGoogleError,
    flow: "auth-code",
    select_account: true,
    include_granted_scopes: true,
  });

  return (
    <>
      <title>Sumptuo — Login</title>
      <div className="h-dvh w-full flex items-center justify-center">
        <div className="px-4 py-8 w-full h-full md:h-fit md:w-fit flex items-center flex-col justify-center gap-2">
          <div
            className="border dark:border-neutral-700 w-fit p-2 rounded-lg cursor-pointer shadow-sm"
            onClick={() => navigate("/")}
          >
            <Logo size="sm" />
          </div>

          <div className="w-full md:min-w-md flex justify-center flex-col py-2 gap-6">
            <div>
              <h1 className="font-heading tracking-tighter text-3xl font-semibold text-center">
                Log in to Sumptuo
              </h1>

              <p className="text-center text-sm text-muted-foreground mt-1">
                Don&apos;t have an account?{" "}
                <Link
                  to={"/signup"}
                  className="dark:text-white text-black hover:text-muted-foreground dark:hover:text-muted-foreground transition-all duration-200 ease-in-out"
                >
                  Sign up.
                </Link>
              </p>
            </div>

            <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
              <FieldGroup className="w-full flex flex-col gap-6">
                <Field>
                  <FieldLabel htmlFor="email" className="text-muted-foreground">
                    Email
                  </FieldLabel>
                  <Input
                    placeholder="email@example.com"
                    type="email"
                    id="email"
                    className="py-6 px-5 rounded-2xl"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email?.message}
                    </p>
                  )}
                </Field>
                <Field>
                  <div className="w-full flex justify-between">
                    <FieldLabel
                      htmlFor="password"
                      className="text-muted-foreground"
                    >
                      Password
                    </FieldLabel>

                    <Link
                      to={"/reset-password"}
                      className="text-sm hover:text-muted-foreground transition-all duration-200 ease-in-out"
                    >
                      Forgot your password?
                    </Link>
                  </div>

                  <InputGroup className="py-6 px-3 rounded-2xl">
                    <InputGroupInput
                      placeholder="••••••••••••"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      required
                      {...register("password", { required: true })}
                    />

                    <InputGroupAddon align={"inline-end"}>
                      {showPassword ? (
                        <IconEyeClosed
                          className="cursor-pointer"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <IconEye
                          className="cursor-pointer"
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </InputGroupAddon>
                  </InputGroup>
                  {errors.password && (
                    <p className="text-xs text-red-500">
                      {errors.password?.message}
                    </p>
                  )}
                </Field>

                {errors.root?.message && (
                  <p className="text-xs text-red-500 text-center">
                    {errors.root.message}
                  </p>
                )}

                {googleError && (
                  <p className="text-xs text-red-500 text-center">
                    {googleError}
                  </p>
                )}

                <Field>
                  <Button
                    className="py-6 px-5 rounded-2xl text-base"
                    type="submit"
                    disabled={!isValid || loading}
                  >
                    {loading && <Spinner />}
                    Log In
                  </Button>
                </Field>

                <FieldSeparator>or</FieldSeparator>

                <div className="w-full flex flex-col md:flex-row gap-5 md:gap-2">
                  <Field>
                    <Button
                      className="py-6 px-5 rounded-2xl"
                      variant="outline"
                      type="button"
                      onClick={() => {
                        setGoogleError("");
                        setGoogleLoading(true);
                        googleLogin();
                      }}
                      disabled={googleLoading}
                    >
                      {googleLoading ? (
                        <Spinner />
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                              fill="currentColor"
                            />
                          </svg>
                          Continue with Google
                        </>
                      )}
                    </Button>
                  </Field>
                  <Field>
                    <Button
                      className="py-6 px-5 rounded-2xl"
                      variant="outline"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          fill="currentColor"
                        />
                      </svg>{" "}
                      Continue with Github
                    </Button>
                  </Field>
                </div>
              </FieldGroup>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
