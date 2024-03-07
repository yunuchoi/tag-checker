export function checkTags(paragraph: string): string {
    const pattern: RegExp = /<\/?([A-Z])>/g;
    const tags: string[] = paragraph.match(pattern) || [];

    return "";
}