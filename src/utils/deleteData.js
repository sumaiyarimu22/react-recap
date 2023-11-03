export const deleteData = async (id) => {
  await fetch(`https://disco-seemly-walker.glitch.me/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
};
