/**
 * Convert seconds to hh:mmm:ss format, eg. 3600 -> 01:00:00
 * @param seconds Seconds in number
 * @param delimiter String that should be between H,M and S. Default to colon (:)
 * @returns H:M:S formatted output
 */
export default function secondsToDuration(seconds: number, delimiter?: string): string;
