export async function getFilmeList(setFilmeList) {
    const TOKEN_KEY =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2EzNGZhODRlZGU5YjFhMzlmNDVkZjExZTQxNGJmMiIsIm5iZiI6MTcyMzgwNzk3MS41MDcyODksInN1YiI6IjY2YmYzNzdkOGMzZDhlOTkzODk3YzIwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q6AqJhyY_VLFY7-6gz1HjDDmp4Lx6bwHSBSiZlztMPw";
  
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${TOKEN_KEY}`,
    };
  
    const url_teste =
      "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc";
  
    try {
      const response = await fetch(url_teste, {
        method: "GET",
        headers: headers,
      });
  
      const data = await response.json();
      setFilmeList(data.results);
    } catch (e) {
      throw new Error("Ocorreu um erro");
    }
  }
  
  export async function getFilmeDescription(filmeId, setFilmeDescription) {
    const TOKEN_KEY =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2EzNGZhODRlZGU5YjFhMzlmNDVkZjExZTQxNGJmMiIsIm5iZiI6MTcyMzgwNzk3MS41MDcyODksInN1YiI6IjY2YmYzNzdkOGMzZDhlOTkzODk3YzIwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q6AqJhyY_VLFY7-6gz1HjDDmp4Lx6bwHSBSiZlztMPw";
  
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${TOKEN_KEY}`,
    };
  
    const url_teste = `https://api.themoviedb.org/3/movie/${filmeId}?language=en-US`
    try {
      const response = await fetch(url_teste, {
        method: "GET",
        headers: headers,
      });
  
      const data = await response.json();
      setFilmeDescription(data.results);
    } catch (e) {
      throw new Error("Ocorreu um erro");
    }
  }