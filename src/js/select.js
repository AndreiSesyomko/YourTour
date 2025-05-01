
export default function selectPlaceholder(e) {
    e.target.style.color="#000";
    window.removeEventListener('change', selectPlaceholder);
}