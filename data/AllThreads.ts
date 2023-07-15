export interface AllThreads {
  profile_pic: string;
  userName: string;
  caption: string;
  id: string;
}
export const fetchAllThreads = async (): Promise<AllThreads[]> => {
  const data: AllThreads[] = [
    {
      userName: "rolika_agarwal",
      id: "1",
      profile_pic: "",
      caption:"random data 1 "
    },
    {
      userName: "dummy_user",
      id: "2",
      profile_pic: "",
      caption:"random data 2 "
    },
    {
      userName: "dummy_user2",
      id: "3",
      profile_pic: "",
      caption:"random data 1 "
    },
    {
      userName: "dummy_user3",
      id: "4",
      profile_pic: "",
      caption:"random data 1 "
    },
  ];
  return data;
};