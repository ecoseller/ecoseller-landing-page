import { Background } from "@/background/Background";
import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Background color="bg-gray-900">
    <Section
      title="Made for growth"
      description="From the most daring sole proprietor to the middle size, ecoseller is your partner in success. Our platform’s agility adapts to your ambitions, ensuring your digital presence resonates with impact."
    >
      <VerticalFeatureRow
        title="User oriented dashboard"
        description="Our dashboard is a symphony of innovation, delivering real-time insights and intuitive control."
        image="/assets/images/catalog_product_edit_media_reorder.gif"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="AI based recommendation system"
        description="We go beyond, embracing the art of recommendation to engage users and boosting sales like. ecoseller’s recommendation system doesn’t just sell, it captivates, creating personalized experiences that fuel engagement."
        image="" //"/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Extensible and customizable"
        description="ecoseller aims to extensible platofrm, powered by our notification API. Seamlessly connect events, unlock the power to call external APIs – it’s your gateway to endless possibilities, making ecoseller not just a platform but a universe of opportunities."
        image="" //"/assets/images/feature3.svg"
        imageAlt="Third feature alt text"
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
