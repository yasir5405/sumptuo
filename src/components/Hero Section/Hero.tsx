import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ProgressiveBlur } from "../ui/progressive-blur";
import { ScalesContainer } from "../ui/scales";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
const Hero = () => {
  return (
    <div className="min-h-[90vh] pt-24 w-full flex flex-col justify-center gap-18">
      {/* <BackgroundRippleEffect /> */}
      <div className="flex w-full  justify-center flex-col gap-4">
        <AnimatedShinyText className="z-10 inline-block text-left text-primary dark:text-primary text-sm">
          <span>For businesses tired of wasting ad spend.</span>
        </AnimatedShinyText>
        <h1 className="font-heading text-5xl font-semibold max-w-5xl z-10">
          Stop wasting money on Google Ads
        </h1>

        <p className="dark:text-muted-foreground max-w-3xl text-sm z-10">
          Most small businesses lose 30–50% of their ad budget without knowing.
          See exactly where your budget is leaking, get plain-language insights,
          and fix it — without hiring an agency.
        </p>

        <div className="w-full flex items-center gap-3">
          <Button
            className="hidden md:flex p-5 transition-all duration-150 ease-in rounded-sm z-10"
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
            className="rounded-sm p-5 z-10"
            asChild
            size={"lg"}
          >
            <Link className="text-sm" to={"/login"}>
              Request a demo
            </Link>
          </Button>
        </div>
      </div>

      <ScalesContainer
        orientation="diagonal"
        size={8}
        containerClassName="w-full overflow-hidden rounded-lg bg-background  dark:bg-black shadow-sm shadow-black/10 dark:shadow-white/10 ring-1 ring-black/5 flex items-center justify-center flex-col p-16 z-10"
      >
        <img
          src="/hero-banner.png"
          className="border border-border rounded-lg"
        />

        <ProgressiveBlur height="50%" position="bottom" />
      </ScalesContainer>
    </div>
  );
};

export default Hero;
