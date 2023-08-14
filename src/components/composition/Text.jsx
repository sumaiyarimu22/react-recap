// eslint-disable-next-line react/prop-types
export default function Text({ addEmoji }) {
  const text = "I am javascript programing language.";

  return <div>{addEmoji ? addEmoji(text, "🎈") : text}</div>;
}
