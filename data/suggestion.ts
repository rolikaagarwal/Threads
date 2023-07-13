interface Suggestion {
  name: string;
  ID: string;
  picUrl: string;
}

export const fetchSuggestion = async (): Promise<Suggestion[]> => {
  const data: Suggestion[] = [
    {
      name: "Rolika",
      ID: "Rolika123",
      picUrl: "",
    },
    {
      name: "Swastik",
      ID: "Swastik456",
      picUrl: "",
    },
    {
      name: "Kartikay",
      ID: "kartikay23",
      picUrl: "",
    },
    {
      name: "Johny",
      ID: "johny123",
      picUrl: "",
    },
  ];
  return data;
};
