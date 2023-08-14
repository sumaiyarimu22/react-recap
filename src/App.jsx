// import Calculator from "./components/Calculator";

import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";

// import Text from "./components/inheritence/Text";

export default function App() {
  return (
    <div>
      {/* <Text /> */}
      <Emoji>{({ addEmoji }) => <Text addEmoji={addEmoji} />}</Emoji>
    </div>
  ); //<Calculator />; //lifting state up
}
