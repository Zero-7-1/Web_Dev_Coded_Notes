   // better version using 'this' 
   const myProfile2 = {
    myName:"Sudhanshu",
    BirthYear: 1999,
    hasDriversLicense: true,
    calculateAge: function(BirthYear) {
                  let currentDate = new Date() // created data object inside the function 
                  let CurrentYear = currentDate.getFullYear();
                  return CurrentYear - this.BirthYear 
                    }
  };
  console.log(myProfile2.calculateAge(2000));