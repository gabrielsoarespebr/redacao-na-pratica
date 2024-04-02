export interface EssayWritingSkill {
  title: string;
  description: string; // note: Inside EssayWritingSkill, description has text and HTML tags, because it is used in innerHTML attribute.
  list: string[],
  mistakes: string;
}
