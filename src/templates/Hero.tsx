import Link from "next/link";

import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Hero = () => (
  <Background color="bg-gray-950">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo />}>
        <li>
          <Link href="https://github.com/ecoseller/ecoseller">GitHub</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {"Unlock the future of\n"}
            <span className="text-purple-400">eCommerce success</span>
          </>
        }
        description="Ready-to-use backend, storefront, dashboard, and AI event-based recommendation system."
        button={
          <Link href="https://github.com/ecoseller/ecoseller">
            <div className="mx-auto max-w-screen-sm text-center">
              <div className="mb-4 text-2xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
                <Button xl>GitHub</Button>
              </div>
            </div>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
