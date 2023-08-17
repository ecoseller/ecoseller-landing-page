import Link from "next/link";

import { Background } from "../background/Background";
import { CenteredFooter } from "../footer/CenteredFooter";
import { Section } from "../layout/Section";
import { Logo } from "./Logo";

const Footer = () => (
  <Background color="bg-gray-800">
    <Section>
      <CenteredFooter logo={<Logo />}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="https://docs.ecoseller.io">Docs</Link>
        </li>
        <li>
          <Link href="https://github.com/ecoseller/ecoseller">GitHub</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
