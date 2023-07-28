import { handlePrimes } from "./handlePrimes";
import { months } from "../const";

export const handleStudentDie = (classes) => {
  const currentMonth = new Date().getMonth() + 1;
  const studentsToDie = [];

  for (const className in classes) {
    const students = classes[className];
    for (const student of students) {
      const lastDigit = student.score % 10;
      const deathMonth = lastDigit === currentMonth ? "bulan ini" : "tahun depan";
      if (handlePrimes(student.score) && deathMonth === "bulan ini") {
        studentsToDie.push({ ...student, deathMonth });
      }
    }
  }

  return studentsToDie;
};
