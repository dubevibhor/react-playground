import { useEffect, useState } from "react";

export const Autocomplete = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filterdData, setFilteredData] = useState([]);
  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log("Eureka!", e.currentTarget);
    setUserInput(e.currentTarget.value);
    const filteredData = data.filter((user) =>
      user?.firstName
        .toLowerCase()
        .includes(e.currentTarget.value.toLowerCase())
    );
    console.log(filteredData);
    setFilteredData(filteredData);
  };
  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch("https://json-mock.org/api/users");
      const users = await res.json();
      setLoading(false);
      setData(users.slice(10));
      console.log(users.slice(10));
    })();
  }, []);

  return (
    <main>
      <label htmlFor="userSearch">Search User</label>
      <input
        type="text"
        id="userSearch"
        onChange={handleOnChange}
        value={userInput}
      />
      {loading && <h3>Loading . . .</h3>}
      <ul>
        {(filterdData || data).map((user) => {
          return (
            <li key={user?.userId}>
              {user?.firstName} {user?.lastName}
            </li>
          );
        })}
      </ul>
    </main>
  );
};
