export const fetchingData = async (setTasks, setLoading, setError) => {
  try {
    const res = await fetch("https://disco-seemly-walker.glitch.me/tasks");
    if (!res.ok) throw new Error("Something went wrong!");

    const data = await res.json();
    setTasks(data);
    setLoading(false);
  } catch (error) {
    setError(error.message);
  }
};
