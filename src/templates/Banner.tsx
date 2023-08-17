import Link from "next/link";

import { Button } from "../button/Button";
import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";
import { Background } from "@/background/Background";

const Banner = () => (
  <Background color="bg-gray-900">
    <Section>
      <CTABanner
        title="Do you want to learn more?"
        subtitle="Find out how to setup, use and customize each and every component."
        button={
          <Link href="https://docs.ecoseller.io">
            <Button>Read the docs</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Banner };
