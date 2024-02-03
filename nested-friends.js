const score = 0;
if(score >= 80) {
    console.log('Go for a Lunch.')
}
else if(score < 80 && score >= 60) {
    console.log('good luck next time.')
}
else if(score <= 60 && score >= 40) {
    console.log(" keep your friend's message unseen.")
}
else if(score < 40) {
    console.log('block your friend')
}
else {
    console.log("wrong input")
}