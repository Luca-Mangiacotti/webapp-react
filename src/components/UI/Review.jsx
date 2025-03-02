import Heading from "./Heading";
import Paragraph from "./Paragraph";
import StarsVote from "./StarsVote";
export default function Review({ review }) {
  return (
    <>
      <Heading level={4}>{review.name}</Heading>
      <StarsVote vote={review.vote} />
      <Paragraph>{review.text}</Paragraph>
    </>
  );
}
