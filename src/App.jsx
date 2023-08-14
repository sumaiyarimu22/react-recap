// import Calculator from "./components/Calculator";

import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";
import Bracket from "./components/composition/Bracket";

// import Text from "./components/inheritence/Text";

export default function App() {
  return (
    <div>
      {/* <Text /> */}
      <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <Text addEmoji={addEmoji} addBracket={addBracket} />
            )}
          </Bracket>
        )}
      </Emoji>
    </div>
  ); //<Calculator />; //lifting state up
}
