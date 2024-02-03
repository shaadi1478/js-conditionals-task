const age = 69;
const vara = 800;
const student = 'str';
if(age < 10) {
    console.log('Ticket Free')
}
else if (student == 'str') {
    const discount = vara * 50 / 100;
    const payAmount = vara - discount;
    console.log('Students get a',payAmount)
}
else if(age >= 60) {
    const discount = vara * 15 / 100;
    const payAmount = vara - discount;
    console.log('Senior citizens',payAmount)
}

else {
    console.log('Otherwise Regular ticket fare', vara)
}