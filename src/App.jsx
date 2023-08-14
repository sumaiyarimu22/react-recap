import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import RenderCounter from "./components/RenderCounter";

export default function App() {
  return (
    <div>
      <RenderCounter>
        {(counter, incrementCount) => (
          <ClickCounter count={counter} incrementCount={incrementCount} />
        )}
      </RenderCounter>

      <RenderCounter>
        {(counter, incrementCount) => (
          <HoverCounter count={counter} incrementCount={incrementCount} />
        )}
      </RenderCounter>
    </div>
  );
}
