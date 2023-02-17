import { v1 } from "uuid";
import tags from "./tags";

/**
 * type a => open source
 * type b => closed source
 */

type ProjectTypes = "a" | "b";

export default [
  createWork({
    name: "Hakawaty",
    short_details:
      "Our platform was built with a passion for storytelling and a commitment to providing a space for voices to be heard. From the ground up, we designed our platform to be intuitive, user-friendly, and engaging, so that anyone could share their stories with the world.",
    details: "",
    tags: [tags.Vue, tags.Node],
    type: 'b'
  }),
];

type Work = {
  name: string,
  short_details: string,
  details: string,
  tags: string[],
  type: ProjectTypes,
}

function createWork({
  name,
  short_details,
  details,
  tags,
  type,
}: Work) {
  return {
    id: v1(),
    name,
    short_details,
    details,
    tags,
    type,
  };
}
