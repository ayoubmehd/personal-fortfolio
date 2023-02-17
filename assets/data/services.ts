import { v1 } from "uuid";

export default [
  createService({
    name: "",
    headline: "",
  }),
];

type Service = {
  name: string;
  headline: string;
};

function createService({ name, headline }: Service) {
  return {
    id: v1(),
    name,
    headline,
  };
}
