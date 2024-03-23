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
      throw new Error("Failed to fetch data from the API.");
    }

    // Check if the response carries a payload
    const hasContent = response.headers.get("content-length") !== "0";

    if (hasContent) {
      const responseData = await response.json();

      // Return the standardized response object
      return {
        value: responseData,
        success: true,
        error: null,
      };
    } else {
      // Return success without parsing JSON
      return {
        value: null,
        success: true,
        error: null,
      };
    }
  } catch (error) {
    // If there's an error, return the standardized response object with error details
    return { value: null, success: false, error: error.message };
  }
}

export { fetchAPI };
