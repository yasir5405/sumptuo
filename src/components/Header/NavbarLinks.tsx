import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import {
  explore,
  getStarted,
  learn,
  platform,
  products,
  solutions,
  useCases,
} from "@/constants/constants";
import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "../ui/button";
import GoogleLogo from "../GoogleLogo";

const NavbarLinks = () => {
  const navigate = useNavigate();
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="w-280 h-100 flex py-6 px-8">
              {/* left div */}
              <div className="h-full w-[70%] flex flex-col gap-3">
                {/* TOp div */}
                <div className="w-full h-1/2 flex flex-col gap-3">
                  <h1 className="text-muted-foreground text-xl">Products</h1>

                  <div className="w-full grid grid-cols-3 gap-y-2 gap-x-3">
                    {products.map((product) => (
                      <div
                        className="flex items-center h-13 gap-2.5 group cursor-pointer"
                        key={product.title}
                        onClick={() => navigate(product.href)}
                      >
                        <div className="p-2 shrink-0 bg-muted-foreground/10 group-hover:bg-primary/50 rounded-lg transition-colors">
                          <product.icon stroke={1.75} size={22} />
                        </div>

                        <div className="flex flex-col justify-center min-w-0">
                          <p className="text-sm font-medium whitespace-nowrap relative flex items-center gap-1">
                            {product.title}
                            <IconArrowRight
                              size={16}
                              stroke={1.5}
                              className="opacity-0 transition-all duration-100 ease-in -translate-x-6 group-hover:translate-x-0 group-hover:opacity-100"
                            />
                          </p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap group-hover:text-black">
                            {product.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bottom div */}
                <div className="w-full h-1/2 flex flex-col gap-3">
                  <h1 className="text-muted-foreground text-xl">Platform</h1>

                  <div className="w-full grid grid-cols-3 gap-y-2 gap-x-3">
                    {platform.map((platform) => (
                      <div
                        className="flex items-center h-13 gap-2.5 group cursor-pointer"
                        key={platform.title}
                        onClick={() => navigate(platform.href)}
                      >
                        <div className="p-2 shrink-0 bg-muted-foreground/10 group-hover:bg-primary/50 rounded-lg transition-colors">
                          <platform.icon stroke={1.75} size={22} />
                        </div>

                        <div className="flex flex-col justify-center min-w-0">
                          <p className="text-sm font-medium whitespace-nowrap relative flex items-center gap-1">
                            {platform.title}
                            <IconArrowRight
                              size={16}
                              stroke={1.5}
                              className="opacity-0 transition-all duration-100 ease-in -translate-x-6 group-hover:translate-x-0 group-hover:opacity-100"
                            />
                          </p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap group-hover:text-black">
                            {platform.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="h-full w-[30%] flex flex-col gap-3 pl-4 cursor-pointer">
                <h1 className="text-muted-foreground text-xl">Updates</h1>

                <div className="w-full h-40 bg-muted-foreground/50 rounded-xl relative overflow-hidden">
                  <div className="h-40 w-full bg-background absolute flex flex-col gap-4 top-3 left-3 rounded-xl p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100px"
                      height="100px"
                      viewBox="-3 0 262 262"
                      preserveAspectRatio="xMidYMid"
                      className="absolute bottom-0 right-0"
                    >
                      <path
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                        fill="#4285F4"
                      />
                      <path
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                        fill="#34A853"
                      />
                      <path
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                        fill="#FBBC05"
                      />
                      <path
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                        fill="#EB4335"
                      />
                    </svg>

                    <h1 className="font-semibold text-xl text-muted-foreground">
                      Google Ads is live
                    </h1>

                    <Button
                      className="w-fit pointer-events-none"
                      variant={"outline"}
                    >
                      <GoogleLogo />
                      Connect Google
                    </Button>
                  </div>
                </div>

                <h1 className="mt-2">Introducing Google Ads Integration</h1>
                <p className="-mt-2 text-sm text-muted-foreground leading-4">
                  Connect your Google ad accounts and start tracking waste in
                  minutes.
                </p>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="w-200 h-fit flex py-6 px-8">
              {/* left div */}
              <div className="h-full w-full flex flex-col gap-6">
                {/* TOp div */}
                <div className="w-full h-1/2 flex flex-col gap-3">
                  <h1 className="text-muted-foreground text-xl">By Problem</h1>

                  <div className="w-full grid grid-cols-3 gap-y-2 gap-x-3">
                    {solutions.map((solution) => (
                      <div
                        className="flex items-center h-13 gap-2.5 group cursor-pointer"
                        key={solution.title}
                        onClick={() => navigate(solution.href)}
                      >
                        <div className="p-2 shrink-0 bg-muted-foreground/10 group-hover:bg-primary/50 rounded-lg transition-colors">
                          <solution.icon stroke={1.75} size={22} />
                        </div>

                        <div className="flex flex-col justify-center min-w-0">
                          <p className="text-sm font-medium whitespace-nowrap relative flex items-center gap-1">
                            {solution.title}
                            <IconArrowRight
                              size={16}
                              stroke={1.5}
                              className="opacity-0 transition-all duration-100 ease-in -translate-x-6 group-hover:translate-x-0 group-hover:opacity-100"
                            />
                          </p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap group-hover:text-black">
                            {solution.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bottom div */}
                <div className="w-full h-fit flex flex-col gap-3">
                  <h1 className="text-muted-foreground text-xl">By Use Case</h1>

                  <div className="w-full grid grid-cols-3 gap-y-2 gap-x-3">
                    {useCases.map((use) => (
                      <div
                        className="flex items-center h-13 gap-2.5 group cursor-pointer"
                        key={use.title}
                        onClick={() => navigate(use.href)}
                      >
                        <div className="p-2 shrink-0 bg-muted-foreground/10 group-hover:bg-primary/50 rounded-lg transition-colors">
                          <use.icon stroke={1.75} size={22} />
                        </div>

                        <div className="flex flex-col justify-center min-w-0">
                          <p className="text-sm font-medium whitespace-nowrap relative flex items-center gap-1">
                            {use.title}
                            <IconArrowRight
                              size={16}
                              stroke={1.5}
                              className="opacity-0 transition-all duration-100 ease-in -translate-x-6 group-hover:translate-x-0 group-hover:opacity-100"
                            />
                          </p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap group-hover:text-black">
                            {use.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="w-280 h-fit flex py-6 px-8">
              {/* left div */}
              <div className="h-full w-[70%] grid grid-cols-3 gap-3">
                <div className="flex flex-col gap-3">
                  <h1 className="text-muted-foreground text-xl">Learn</h1>

                  <div className="flex flex-col gap-2">
                    {learn.map((solution) => (
                      <div
                        className="flex items-center h-13 gap-2.5 group cursor-pointer"
                        key={solution.title}
                        onClick={() => navigate(solution.href)}
                      >
                        <div className="p-2 shrink-0 bg-muted-foreground/10 group-hover:bg-primary/50 rounded-lg transition-colors">
                          <solution.icon stroke={1.75} size={22} />
                        </div>

                        <div className="flex flex-col justify-center min-w-0">
                          <p className="text-sm font-medium whitespace-nowrap relative flex items-center gap-1">
                            {solution.title}
                            <IconArrowRight
                              size={16}
                              stroke={1.5}
                              className="opacity-0 transition-all duration-100 ease-in -translate-x-6 group-hover:translate-x-0 group-hover:opacity-100"
                            />
                          </p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap group-hover:text-black">
                            {solution.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-muted-foreground text-xl">Explore</h1>

                  <div className="flex flex-col gap-2">
                    {explore.map((solution) => (
                      <div
                        className="flex items-center h-13 gap-2.5 group cursor-pointer"
                        key={solution.title}
                        onClick={() => navigate(solution.href)}
                      >
                        <div className="p-2 shrink-0 bg-muted-foreground/10 group-hover:bg-primary/50 rounded-lg transition-colors">
                          <solution.icon stroke={1.75} size={22} />
                        </div>

                        <div className="flex flex-col justify-center min-w-0">
                          <p className="text-sm font-medium whitespace-nowrap relative flex items-center gap-1">
                            {solution.title}
                            <IconArrowRight
                              size={16}
                              stroke={1.5}
                              className="opacity-0 transition-all duration-100 ease-in -translate-x-6 group-hover:translate-x-0 group-hover:opacity-100"
                            />
                          </p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap group-hover:text-black">
                            {solution.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-muted-foreground text-xl">Get Started</h1>

                  <div className="flex flex-col gap-2">
                    {getStarted.map((solution) => (
                      <div
                        className="flex items-center h-13 gap-2.5 group cursor-pointer"
                        key={solution.title}
                        onClick={() => navigate(solution.href)}
                      >
                        <div className="p-2 shrink-0 bg-muted-foreground/10 group-hover:bg-primary/50 rounded-lg transition-colors">
                          <solution.icon stroke={1.75} size={22} />
                        </div>

                        <div className="flex flex-col justify-center min-w-0">
                          <p className="text-sm font-medium whitespace-nowrap relative flex items-center gap-1">
                            {solution.title}
                            <IconArrowRight
                              size={16}
                              stroke={1.5}
                              className="opacity-0 transition-all duration-100 ease-in -translate-x-6 group-hover:translate-x-0 group-hover:opacity-100"
                            />
                          </p>
                          <span className="text-sm text-muted-foreground whitespace-nowrap group-hover:text-black">
                            {solution.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="h-full w-[30%] flex flex-col gap-3 pl-4 cursor-pointer">
                <h1 className="text-muted-foreground text-xl">Featured</h1>

                <div className="w-full h-40 bg-primary/60 rounded-xl flex flex-col items-center justify-center">
                  <h1 className="text-xl text-amber-200">New on Sumptuo</h1>
                  <p className="text-xs text-white">
                    Smarter Google Ads for Indian businesses.
                  </p>
                </div>

                <h1 className="mt-2">Ad spend tracking</h1>
                <p className="-mt-3 text-sm text-muted-foreground leading-4">
                  Start tracking wasted spend.
                </p>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to={"/privacy-policy"}>Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarLinks;
