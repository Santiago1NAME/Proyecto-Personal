const requestApiPost = async (formData: {}, url: string) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      const errorData = await response.json();
      return errorData;
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log('Error en el servidor');
  }
};

export default requestApiPost;