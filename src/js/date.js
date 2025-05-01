
function dateIn(first, second, border) {
    first.style.borderColor = '#A6A6A6';
    first.setAttribute('type', 'date');
    let arr = second.value.split('-');
    first.setAttribute(border, `${arr[2]}-${arr[1]}-${arr[0]}`)
}

function dateOut(first, second, coef) {
    first.style.borderColor = '#F4F0E9';
    let res = first.value.split('-');
    let arr = second.value.split('-');
    let from, to;
    if(coef < 0) {
        from = new Date(Date.parse(first.value));
        to = new Date(Date.parse(`${arr[2]}-${arr[1]}-${arr[0]}`));
    } else {
        from = new Date(Date.parse(`${arr[2]}-${arr[1]}-${arr[0]}`));
        to = new Date(Date.parse(first.value));
    }
    first.setAttribute('type', 'text');
    console.log(from > to);
    if(from && to && from > to)  {
        let date = second.value.split('-');
        first.value = `${Number(date[0])+coef}-${date[1]}-${date[2]}`;
        return;
    }
    if(res[0]) first.value = `${res[2]}-${res[1]}-${res[0]}`;
}

export default {dateIn, dateOut}