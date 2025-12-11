const baseUrl = "/api/login";

const login = async (credentials) =>{
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials)
  });

  return res.json();
}
export default { login };