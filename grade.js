const mark = 59;
if(mark >=90 && mark <= 100) {
    console.log('Your Grade is A.')
}
else if (mark >= 80 && mark <= 89) {
    console.log('Your Grade is B.')
}
else if (mark >= 70 && mark <= 79) {
    console.log('Your Grade is C.')
}
else if (mark >= 60 && mark <= 69) {
    console.log('Your Grade is D.')
}
else if (mark >= 0 && mark <= 59) {
    console.log('Your Grade is F.')
}
else {
    console.log('worng input || mark >= 0 && mark <= 100 ')
}