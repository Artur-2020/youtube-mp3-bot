export default function (
    string: string,
    values: Record<string, string | number | boolean> = {},
) {
    let replaceValue = '';
    for (const value in values) {
        replaceValue = '{' + value + '}';
        string = string.replaceAll(replaceValue, <string>values[value]);
    }
    return string;
}
