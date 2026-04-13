import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="min-h-[90vh] w-full relative flex flex-col items-center justify-center gap-7">
      <h1 className="font-heading text-7xl text-center font-semibold max-w-5xl leading-16">
        Stop wasting money on Google Ads
      </h1>

      <p className="dark:text-muted-foreground max-w-3xl text-center">
        See exactly where your budget is leaking, get plain-language insights,
        and fix it — without hiring an agency. Most small businesses lose 30–50%
        of their ad budget without knowing
      </p>

      <div className="w-fit flex items-center justify-center gap-3">
        <Button
          className="hidden md:flex p-5 transition-all duration-150 ease-in rounded-sm"
          asChild
          size={"lg"}
        >
          <Link to="/dashboard" className="text-sm flex items-center group">
            Get Sumptuo free
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              {/* Shaft */}
              <path
                d="M4 12H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="transition-all duration-200 origin-left scale-x-0 group-hover:scale-x-100"
              />

              {/* Arrow head */}
              <path
                d="M14 6L20 12L14 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Button>

        <Button
          variant={"secondary"}
          className="rounded-sm p-5 "
          asChild
          size={"lg"}
        >
          <Link className="text-sm" to={"/login"}>
            Request a demo
          </Link>
        </Button>
      </div>

      <div className="w-full p-2 bg-accent border border-border overflow-hidden rounded-lg">
        <img
          src="/hero-banner.png"
          className="border border-border rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
