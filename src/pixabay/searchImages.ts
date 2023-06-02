export const searchImages = async () => {
  const res = await fetch(
    `https://pixabay.com/api/?key=36937357-ac8b626f4d99a3f043d01f6c3`
  );
  const json = await res.json();
  return json
};
