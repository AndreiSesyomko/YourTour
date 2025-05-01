
export default function onPhone(e) {
    const x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

    if (!x[1]) {
        e.target.value = '';
        return;
    }

    if (!x[2]) {
        e.target.value = `+${x[1]}`;
        return;
    }
    
    e.target.value = `+${x[1]} (${x[2]}` + ( x[3] ? `) ${x[3]}` : '' ) + ( x[4] ? `-${x[4]}` : '' ) + ( x[5] ? `-${x[5]}` : '' );
}