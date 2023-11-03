export const puutingRequest = async (id, newData) => {
  await fetch(`https://disco-seemly-walker.glitch.me/tasks/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newData),
  });
};
