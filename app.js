const isElderFourteen = (date) => {
    const regExp = /\d\d\d\d-\d\d-\d\d/;

    if (!regExp.test(date)){
      return 'Введите день рождения в формате ГГГГ-ММ-ДД';
    }

    const birthDate = new Date(date).getTime();
    const now = new Date().getTime();
    const age = new Date(now - birthDate).getFullYear() - 1970;
    return age;
      
}

console.log(isElderFourteen('2000-01-01'));
console.log(isElderFourteen('2012-11-27'));