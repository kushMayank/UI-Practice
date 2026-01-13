import { useRef, useState } from "react";

export const UserForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("===>", JSON.stringify(formData));
    window.alert(JSON.stringify(formData));
  };

  const checkValidEmail = (e) => {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    regex.test(e.target.value);
  };

  const isSubmitDisabled =
    !formData.username || !formData.email || !formData.password;

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <ul>
          <li>
            <label>User Name : </label>
            <input
              type="text"
              name="username"
              onChange={(e) => handleChange(e)}
            />
          </li>
          <li>
            <label>email : </label>
            <input
              type="text"
              name="email"
              onBlur={checkValidEmail}
              onChange={(e) => handleChange(e)}
            />
          </li>
          <li>
            <label>password : </label>
            <input
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </li>
          <li>
            <input type="submit" disabled={isSubmitDisabled} />
          </li>
        </ul>
      </form>
    </>
  );
};

export const DynamicList = () => {
  const [interests, setInterests] = useState([]);
  const interestRef = useRef(null);
  const handleAddInterest = (e) => {
    e.preventDefault();
    const value = interestRef.current.value;
    setInterests((prev) => [...prev, value]);
    interestRef.current.value = "";
  };

  const handleRemoveInterest = (removeIndex) => {
    setInterests((prev) => prev.filter((_, index) => index !== removeIndex));
  };

  console.log("DynamicList re- render");
  return (
    <>
      <form onSubmit={handleAddInterest}>
        <label>interests : </label>{" "}
        <input
          type="text"
          name="interest"
          style={{ border: "1px solid grey" }}
          ref={interestRef}
        />
        <button type="submit" style={{ border: "1px solid grey" }}>
          Add Interest +
        </button>
      </form>
      <ul>
        {interests.map((item, index) => (
          <li key={index}>
            {item}
            <button
              type="button"
              onClick={() => handleRemoveInterest(index)}
              style={{
                cursor: "pointer",
                border: "none",
                background: "transparent",
                color: "red",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
