const isElderFourteen = (date) => {
    const regExp = /\d\d\d\d-\d\d-\d\d/;

    if (!regExp.test(date)){
      return 'Введите день рождения в формате ГГГГ-ММ-ДД';
    }

    const birthDate = new Date(date);
    const now = new Date();

    return now.getFullYear() - birthDate.getFullYear() < 14 ? false : true
      
}

console.log(isElderFourteen('2000-01-01'));
console.log(isElderFourteen('2012-01-01'));