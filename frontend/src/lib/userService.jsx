
const baseUrl = process.env.NEXT_PUBLIC_API_URL + "/api/users";


const register = async (newUser) => {
    const res = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
    });

    if (!res.ok) {
        throw new Error("Failed to register user");
    }

    return res.json();
}

export default { register };

