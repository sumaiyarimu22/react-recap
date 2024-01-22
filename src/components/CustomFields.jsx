import { useState } from "react";

const CustomFields = () => {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "input",
    },
  ]);

  const handleaddInput = () => {
    const nextId = inputs[inputs.length - 1].id + 1;

    setInputs([...inputs, { id: nextId, label: `input ${nextId}` }]);
  };

  return (
    <div>
      {inputs.map((input) => (
        <div key={input.id}>
          <input
            type='text'
            placeholder={input.label}
            className='border border-black'
          />
          <br />
        </div>
      ))}
      <br />
      <div>
        <button className='border border-black' onClick={handleaddInput}>
          Add Input
        </button>
      </div>
    </div>
  );
};

export default CustomFields;
