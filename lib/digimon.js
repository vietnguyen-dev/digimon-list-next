const getAllDigimon = async () =>{
  try {
    const res = await fetch(`https://digimon-api.vercel.app/api/digimon`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // console.log('function is called')
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.error(err, `error is happening`);
  }
}

export default getAllDigimon