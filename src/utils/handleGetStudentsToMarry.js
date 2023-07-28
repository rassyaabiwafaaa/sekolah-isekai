export const handleGetStudentsToMarry = (classes) => {
  let studentsToMarry;
  return (studentsToMarry = classes["Kelas Khusus"].filter((student) => {
    return student.score % 7 === 0;
  }));
};
