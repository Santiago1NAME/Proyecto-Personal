const requestApiGet = async (url: string, options = {}) => {
    try {
      //const response = await fetch(url, { cache: 'force-cache' });
      //const response = await fetch(url, { next: { revalidate: 15 } });
      //const response = await fetch(url, { cache: 'no-store' })
      if(options.token){
        options.headers = options.headers || {};
        options.headers.authorization = `Bearer ${options.token}`;
      }
      const typeFetch = {
        cache: options.cache,
      }
      const fetchOptions = { ...typeFetch, ...options};
      const response = await fetch(url, fetchOptions);
      if (!response.ok) {
        const errorData = await response.json();
        return errorData;
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.log('Error en el servidor ', error);
    }
  };
  
  export default requestApiGet;