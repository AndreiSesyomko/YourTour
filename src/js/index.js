
import changeNav from './nav.js';
import selectPlaceholder from './select.js';
import onEmail from './email.js';
import onPhone from './phone.js';
import date from './date.js';

window.addEventListener('scroll', changeNav);
document.getElementById('phone').addEventListener('input', (e) => onPhone(e));
document.getElementById('select').addEventListener('change', (e) => selectPlaceholder(e));
document.getElementById('email').addEventListener('focusin', (e) => e.target.style.borderColor = '#A6A6A6')
document.getElementById('email').addEventListener('focusout', (e) => onEmail(e));
document.getElementById('date_from').addEventListener('focusin', (e) => date.dateIn(e.target, document.getElementById('date_to'), 'max'))
document.getElementById('date_from').addEventListener('focusout', (e) => date.dateOut(e.target, document.getElementById('date_to'), -1))
document.getElementById('date_to').addEventListener('focusin', (e) => date.dateIn(e.target, document.getElementById('date_from'), 'min'))
document.getElementById('date_to').addEventListener('focusout', (e) => date.dateOut(e.target, document.getElementById('date_from'), 1))