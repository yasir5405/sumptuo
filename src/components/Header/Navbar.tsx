import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import {} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { IconMenuDeep, IconX } from "@tabler/icons-react";

import NavbarLinks from "./NavbarLinks";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  featuresSections,
  integrationsSections,
  caseStudiesSections,
  pricingSections,
} from "@/constants/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

const MobileProductsAccordion = ({
  section,
}: {
  section: {
    title: string;
    items: {
      name: string;
      description: string;
      href: string;
    }[];
  }[];
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col gap-4 font-heading">
      <h1 className="dark:text-muted-foreground text-sm">Features</h1>

      <Accordion type="single" collapsible className="w-full">
        {section.map((group, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-none"
          >
            {/* Trigger */}
            <AccordionTrigger className="text-2xl font-medium py-2 hover:no-underline flex items-center">
              {group.title}
            </AccordionTrigger>

            {/* Content */}
            <AccordionContent className="flex flex-col gap-0">
              {group.items.map((item) => (
                <h1
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className="text-base dark:text-neutral-300 transition-colors px-2 py-2 rounded-md hover:bg-white/5 no-underline"
                >
                  {item.name}
                </h1>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const MobileNavSections = ({
  section,
  title,
}: {
  section: {
    title: string;
    items: {
      name: string;
      description: string;
      href: string;
    }[];
  }[];
  title: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col gap-4 font-heading">
      <h1 className="dark:text-muted-foreground text-sm">{title}</h1>

      <div className="w-full flex flex-col gap-2.5">
        {section.map((group) =>
          group.items.map((item) => (
            <h1
              key={item.name}
              onClick={() => navigate(item.href)}
              className="font-medium text-2xl cursor-pointer py-1 rounded-md hover:bg-white/5 transition-colors"
            >
              {item.name}
            </h1>
          )),
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="-ml-0.5 fixed top-0 left-0 w-full h-16 border-b border-border/40 flex items-center justify-between px-5 md:px-28 z-20 bg-background/70 backdrop-blur-md shadow-none">
      {open && (
        <div className="w-full fixed top-16 inset-0 py-8 z-50 dark:bg-black/80 bg-background  dark:backdrop-blur-lg px-5 flex md:hidden flex-col gap-10 overflow-y-auto">
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <Button
              size={"lg"}
              className="w-full text-base py-2 px-8 dark:text-white hover:bg-hover transition-all duration-200 ease-in-out"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              size={"lg"}
              variant={"link"}
              className="w-full text-base border border-primary py-2 px-8  hover:bg-hover transition-all duration-200 ease-in-out"
            >
              Get Started
            </Button>
          </div>
          <MobileProductsAccordion section={featuresSections} />
          <MobileNavSections
            section={integrationsSections}
            title="Integrations"
          />
          <MobileNavSections
            section={caseStudiesSections}
            title="Case Studies"
          />
          <MobileNavSections section={pricingSections} title="Pricing" />

          <h1 className="font-medium text-2xl">Report an issue</h1>
        </div>
      )}

      <Link to={"/"} className="flex h-full w-fit items-center justify-center">
        <Logo size="sm" />

        <h1 className="font-heading text-xl font-semibold">Sumptuo</h1>
      </Link>

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
        <NavbarLinks />
      </div>

      <div className="h-full w-fit flex items-center justify-center gap-3 md:gap-2">
        <AnimatedThemeToggler />

        <Button
          variant={"ghost"}
          className="hidden text-primary hover:border-primary transition-all duration-150 ease-in md:flex hover:text-primary rounded-sm p-4.5 border-primary "
          asChild
          size={"lg"}
        >
          <Link className="text-sm" to={"/login"}>
            Log in
          </Link>
        </Button>

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

        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="block md:hidden"
            >
              <IconX onClick={() => setOpen(false)} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="block md:hidden"
            >
              <IconMenuDeep onClick={() => setOpen(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
