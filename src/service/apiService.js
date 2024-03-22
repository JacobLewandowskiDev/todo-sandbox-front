async function fetchAPI(url, method = "GET", data = null, headers = {}) {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: data ? JSON.stringify(data) : null,
    });

    if (!response.ok) {
      // If the response is not okay, throw an error
      throw new Error("Failed to fetch data from the API.");
    }

    if (
      method === "DELETE" ||
      method === "PUT" ||
      (method === "POST" &&
        Array.isArray(data) &&
        data.length > 0 &&
        typeof data[0] === "object")
    ) {
      return { success: true, error: null };
    }

    // Parse the response JSON
    const responseData = await response.json();

    // Return the standardized response object
    return { value: responseData, success: true, error: null };
  } catch (error) {
    // If there's an error, return the standardized response object with error details
    return { value: null, success: false, error: error.message };
  }
}

export { fetchAPI };
