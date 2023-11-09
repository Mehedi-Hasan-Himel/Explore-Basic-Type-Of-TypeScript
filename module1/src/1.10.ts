{
  // union type
  //    type FrontendDeveloper = "fakibazDeveloper" | "JuniorDeveloper";
  //    type FullStackDeveloper = "frontEndDeveloper" | "ExpertDeveloper";

  //    type Developer = FrontendDeveloper | FullStackDeveloper;

  //   const newDeveloper: FrontendDeveloper = "JuniorDeveloper";

  //   type User = {
  //     name: string;
  //     email: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "A+" | "AB+";
  //   };

  //   const user1: User = {
  //     name: "persian",
  //     gender: "male",
  //     bloodGroup: "O+",
  //   };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
