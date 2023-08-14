// eslint-disable-next-line react/prop-types
export default function Text({ addEmoji, addBracket }) {
  let text = "I am javascript programing language.";

  if (addEmoji) {
    text = addEmoji(text, "🎁");
  }
  if (addBracket) {
    text = addBracket(text);
  }

  return <div>{text}</div>;
}
