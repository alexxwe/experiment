// function getBonusAmount(employee) {
//     let bonusAmount = 0;
//     if (employee.jobTitle === "Manager") {
//       bonusAmount = 1000;
//     } else if (employee.jobTitle === "Supervisor") {
//       bonusAmount = 500;
//     } else if (employee.jobTitle === "Staff") {
//       bonusAmount = 250;
//     }
//     if (employee.yearsOfService >= 10) {
//       bonusAmount += 500;
//     }
//     return bonusAmount;
//   }

  const jobTitleBonuses: Record<string, number> = {
    Manager: 1000,
    Supervisor: 500,
    Staff: 250,
  };
  
  function getBonusAmount(employee: { jobTitle: string, yearsOfService: number }): number {
    let bonusAmount = jobTitleBonuses[employee.jobTitle] ?? 0;
    if (employee.yearsOfService >= 10) {
      bonusAmount += 500;
    }
    return bonusAmount;
  }
  
  const employee = { jobTitle: "Manager", yearsOfService: 8 };
  
  let bonusAmount = getBonusAmount(employee);
  
  console.log(bonusAmount)