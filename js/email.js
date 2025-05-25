
export default function onEmail(e) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if(EMAIL_REGEXP.test(e.target.value) || e.target.value == '') {
        e.target.style.borderColor = '#F4F0E9';
    } else {
        e.target.style.borderColor = 'red';
    }
}