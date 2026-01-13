
export const buildTeletextUrl = (page, subpage) => {
  const appId = process.env.NEXT_PUBLIC_TV_API; //API defined in the .env file

  return `https://external.api.yle.fi/v1/teletext/images/${page}/${subpage}.png?${appId}`;
}

export const imageExists = async (page, subpage) =>{
  const url = buildTeletextUrl(page, subpage)
  try {
    const res = await fetch(url);
    return res.ok;
  } catch (err) {
    console.log()
    return false;
  }
}
