
export const getData = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/b/HVPR`);
    const exploreData = await  res.json();
    return exploreData;
  } catch (error) {
    console.log("Fetch : ", error);
  }
}