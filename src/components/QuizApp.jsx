import { useState } from "react";

const QuizApp = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1 className='text-5xl'>Thats right!</h1>;
  }

  const handleInputChnage = (e) => {
    setAnswer(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submiting");

    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error);
    }
  };

  return (
    <div className='p-[3rem] bg-gray-100'>
      <h2 className='text-xl font-bold'>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleInputChnage}
          disabled={status === "submiting"}
          className='border border-black'
        ></textarea>

        <br />
        <button
          disabled={answer.length === 0 || status === "submiting"}
          className='border  px-6 py-2'
        >
          Submit
        </button>
      </form>
      {error !== null && <p className='text-red-500'>{error.message}</p>}
    </div>
  );
};

export default QuizApp;

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";

      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again! "));
      } else {
        resolve();
      }
    }, 1500);
  });
}
