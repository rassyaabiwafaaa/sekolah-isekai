export const handleCheckMarriageYear = (arr) => {
    const currentYear = new Date().getFullYear();
    const result = [];

    for (const item of arr) {
      const name = item.name;
      const score = item.score;
      const remainder = score % 7;
      let marriageYear = currentYear;

      if (remainder === 0) {
        // Jika hasil bagi dengan 7 adalah 0, maka menambahkan 1 tahun dari tahun sekarang
        marriageYear += 1;
      } else {
        // Jika hasil bagi dengan 7 bukan 0, maka menambahkan selisih dari 7 ke tahun sekarang
        marriageYear += 7 - remainder;
      }

      result.push({
        name: name,
        score: score,
        marriageYear: marriageYear,
      });
    }

    return result;
  };