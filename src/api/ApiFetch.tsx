class ApiFetch<T> {
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  async fetchData(): Promise<T> {
    try {
      const response = await fetch(this.filePath);
      if (!response.ok) {
        throw new Error(
          `Erreur lors de la lecture du fichier : ${response.statusText}`
        );
      }
      const data = await response.json();
      if (data === null) {
        throw new Error("Erreur: les données récupérées sont nulles");
      }
      return data;
    } catch (error) {
      console.error("Erreur lors de la lecture du fichier :", error);
      throw error;
    }
  }
}

export default ApiFetch;

// const fetchAccommodations = async (): Promise<Result<Accommodation[]>> => {
//   const apiFetch = new ApiFetch<Accommodation[]>("./src/assets/data.json");

//   try {
//     const data = await apiFetch.fetchData();
//     return makeResult.success(data);
//   } catch (error) {
//     console.error(error);
//     return makeResult.error(error as Error);
//   }
// };

// export { fetchAccommodations };
