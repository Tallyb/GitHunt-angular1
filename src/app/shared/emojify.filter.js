import emoji  from 'node-emoji';

export default function () {

    return function (text) {
        if (text) {
            return emoji.emojify(text);
        }
    }

}


