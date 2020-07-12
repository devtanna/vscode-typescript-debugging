/** Say hello */
export const hello = (name: string) => {
    const greeting = `Hello ${name}!`;
    return greeting;
};

export const scratchPad = () => {
    let url = "19%253ameeting_OGU0MDZiNmYtZDkzNC00Mzc5LWJhZmYtMjBkYzJlYzk0YmZm%2540thread.v2"
    console.log('>>>>>', decodeUrl(url));
};


function decodeUrl(deepLinkContextOrString: string): string {
    let decodedUrl = decodeURIComponent(deepLinkContextOrString);
    // decode until no encoded characters are left.
    while (decodedUrl != decodeURIComponent(decodedUrl)) {
    decodedUrl = decodeURIComponent(decodedUrl);
    }
    return decodedUrl;
}
