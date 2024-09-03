/* We must have seen our exact age being displayed in an website, while filling an
examination form etc., like 21 years 4 months , something like that 
Here we will work on program that calulates accurate age both year and months 
wise based users's birthday */


const calculateAge = (birthYear, birthMonth, birthDay) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-11
    const currentDay = currentDate.getDate();

    let age = currentYear - birthYear;

    // Adjust age if the birth date hasn't occurred yet this year
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) 
        {
        age--;
    }

    // Calculate month difference
    let monthDiff = currentMonth - birthMonth;
    if (currentDay < birthDay) {
        monthDiff--;
    }
    if (monthDiff < 0) {
        monthDiff += 12;
    }

    // Calculate day difference
    let dayDiff = currentDay - birthDay;
    if (dayDiff < 0) {
        const prevMonth = new Date(currentYear, currentMonth - 1, 0);
        dayDiff += prevMonth.getDate();
    }

    return { age, monthDiff, dayDiff };
};

// Demo usage
const result = calculateAge(1999, 9, 4);
console.log(`You are ${result.age} years, ${result.monthDiff} months, 
             and ${result.dayDiff} days old.`);
