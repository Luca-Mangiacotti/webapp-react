import Heading from "../components/UI/Heading";
import Buttons from "../components/UI/Buttons";
import Paragraph from "../components/UI/Paragraph";
import Container from "../components/UI/Container";
export default function DesignSystem() {
  return (
    <div className="space-y-4">
      <Container>
        <Heading level={1}>Typography</Heading>
        <Heading level={1}>Heading h1</Heading>
        <Heading level={2}>Heading h2</Heading>
        <Heading level={3}>Heading h3</Heading>
        <Heading level={4}>Heading h4</Heading>
        <Heading level={5}>Heading h5</Heading>
        <Heading level={6}>Heading h6</Heading>
        <Paragraph size="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          obcaecati, amet id explicabo suscipit, consequatur laboriosam saepe in
          labore esse placeat consequuntur odio est quam? Ipsam quibusdam
          voluptatem similique autem!
        </Paragraph>
      </Container>
      <hr />
      <Container>
        <Heading level={1}>Buttons</Heading>
        <Buttons>Primary</Buttons> <br />
        <Buttons variant="secondary">Secondary</Buttons> <br />
        <Buttons variant="secondary" size="lg">
          Secondary Large
        </Buttons>
        <br />
        <Buttons variant="primary" size="sm">
          Primary Small
        </Buttons>
      </Container>
      <hr />
      <Container>
        <Heading level={1}>Card</Heading>
        <div className="w-96"></div>
      </Container>
    </div>
  );
}
