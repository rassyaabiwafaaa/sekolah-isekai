export const handleProcessData = (classes, data) => {
  for (const student of data) {
    const { name, score } = student;
    if (name.includes("C") && name.includes("O")) {
      if (score % 7 === 0) {
        classes["Kelas Khusus"].push(student);
      }
    } else {
      if (score >= 50 && score <= 100) {
        const className = `Kelas ${Math.floor(score / 10)}`;
        classes[className].push(student);
      }
    }
  }

  return classes;
};
