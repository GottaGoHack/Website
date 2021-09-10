export const app = {
    name: 'Gotta Go Hack',
    version: '1.0.0',
    repository: 'https://github.com/Gotta-Go-Hack/website'
};

// TODO: Error page

export function title(page) {
    return `${app.name} — ${page}`;
}
