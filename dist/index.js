/**
 * Convert seconds to hh:mmm:ss format, eg. 3600 -> 01:00:00
 * @param seconds Seconds in number
 * @param delimiter String that should be between H,M and S. Default to colon (:)
 * @returns H:M:S formatted output
 */
export default function secondsToDuration(seconds, delimiter = ':') {
    return [
        Math.floor(seconds / 60 / 60),
        Math.floor(seconds / 60 % 60),
        Math.floor(seconds % 60)
    ].join(delimiter)
        .replace(/\b(\d)\b/g, "0$1").replace(/^00\:/, '');
}