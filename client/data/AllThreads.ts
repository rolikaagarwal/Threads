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
      caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati praesentium cupiditate accusamus fuga ullam laboriosam beatae! Cupiditate dolorem vitae voluptatem blanditiis quae provident ipsum aliquam facere libero ut saepe quas dolor, odio quia voluptate eos excepturi similique, exercitationem incidunt voluptates molestias expedita hic cum! Accusamus et delectus praesentium, consectetur perspiciatis esse doloribus rerum voluptatibus illo quaerat. Quasi provident dolor ea amet ex quod tenetur delectus doloremque, quae beatae corporis accusamus nobis tempore. Excepturi in voluptatibus repellendus illo voluptatum ducimus eius animi nesciunt quod dolores sequi veniam, ad perspiciatis labore cum, consequuntur, libero quibusdam suscipit impedit unde illum ipsam consectetur! "
    },
    {
      userName: "kartikayasija",
      id: "2",
      profile_pic: "",
      caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati praesentium cupiditate accusamus fuga ullam laboriosam beatae! Cupiditate dolorem vitae voluptatem blanditiis quae provident ipsum aliquam facere libero ut saepe quas dolor, odio quia voluptate eos excepturi similique, exercitationem incidunt voluptates molestias expedita hic cum! Accusamus et delectus praesentium, consectetur perspiciatis esse doloribus rerum voluptatibus illo quaerat. Quasi provident dolor ea amet ex quod tenetur delectus doloremque, quae beatae corporis accusamus nobis tempore. Excepturi in voluptatibus repellendus illo voluptatum ducimus eius animi nesciunt quod dolores sequi veniam, ad perspiciatis labore cum, consequuntur, libero quibusdam suscipit impedit unde illum ipsam consectetur!"
    },
    {
      userName: "tanisha_agarwal",
      id: "3",
      profile_pic: "",
      caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati praesentium cupiditate accusamus fuga ullam laboriosam beatae! Cupiditate dolorem vitae voluptatem blanditiis quae provident ipsum aliquam facere libero ut saepe quas dolor, odio quia voluptate eos excepturi similique, exercitationem incidunt voluptates molestias expedita hic cum! Accusamus et delectus praesentium, consectetur perspiciatis esse doloribus rerum voluptatibus illo quaerat. Quasi provident dolor ea amet ex quod tenetur delectus doloremque, quae beatae corporis accusamus nobis tempore. Excepturi in voluptatibus repellendus illo voluptatum ducimus eius animi nesciunt quod dolores sequi veniam, ad perspiciatis labore cum, consequuntur, libero quibusdam suscipit impedit unde illum ipsam consectetur! "
    },
    {
      userName: "Swastik123",
      id: "4",
      profile_pic: "",
      caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati praesentium cupiditate accusamus fuga ullam laboriosam beatae! Cupiditate dolorem vitae voluptatem blanditiis quae provident ipsum aliquam facere libero ut saepe quas dolor, odio quia voluptate eos excepturi similique, exercitationem incidunt voluptates molestias expedita hic cum! Accusamus et delectus praesentium, consectetur perspiciatis esse doloribus rerum voluptatibus illo quaerat. Quasi provident dolor ea amet ex quod tenetur delectus doloremque, quae beatae corporis accusamus nobis tempore. Excepturi in voluptatibus repellendus illo voluptatum ducimus eius animi nesciunt quod dolores sequi veniam, ad perspiciatis labore cum, consequuntur, libero quibusdam suscipit impedit unde illum ipsam consectetur!"
    },
  ];
  return data;
};