const baseUrl = process.env.NEXT_PUBLIC_API_URL + "/api/login";



const login = async (credentials) => {
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Invalid credentials");
  }

  return data;
};

export default { login };
