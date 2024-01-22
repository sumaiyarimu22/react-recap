// import { useEffect } from "react";
import { useState } from "react";

const ProfileEditor = () => {
  const [fullName, setFullName] = useState({
    firstName: "Jane",
    lastName: "Jacobs",
  });
  const [isEditting, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setFullName({ ...fullName, [name]: value });
  };

  // useEffect(() => {
  //   console.log(fullName);
  // }, [fullName]);

  return (
    <form
      className='p-[4rem]'
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditting);
      }}
    >
      <label>
        First Name :
        {isEditting ? (
          <input
            name='firstName'
            value={fullName.firstName}
            onChange={handleChange}
            className='border px-2 border-black'
            type='text'
            placeholder='first name'
          />
        ) : (
          <b>{fullName.firstName}</b>
        )}
      </label>
      <br />
      <br />
      <label>
        Last Name :
        {isEditting ? (
          <input
            name='lastName'
            value={fullName.lastName}
            onChange={handleChange}
            className='border px-2 border-black'
            type='text'
            placeholder='last name'
          />
        ) : (
          <b>{fullName.lastName}</b>
        )}
      </label>
      <br />
      <br />
      <button type='submit' className='border border-black px-6 py-1'>
        {isEditting ? "Save" : "Edit"}
      </button>
      <br />
      <br />
      <p>
        Hello , {fullName.firstName} {fullName.firstName.lastName}
      </p>
    </form>
  );
};

export default ProfileEditor;
