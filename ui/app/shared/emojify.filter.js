import emojify  from 'node-emoji';

export function EmojifyFilter  (text) {
    if (text) {
        return emojify(text);
    }
}

