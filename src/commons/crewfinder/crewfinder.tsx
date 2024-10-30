const ProducerRole = (role: string): string => {
  switch (role) {
    case "Executive Producer":
      return "총괄 프로듀서";
    case "Producer":
      return "프로듀서";
    default:
      return role;
  }
};

export default ProducerRole;
