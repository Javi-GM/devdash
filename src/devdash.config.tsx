export interface DevDashConfig {
    github_access_token: string;
    repositories: {
        id: string;
        url: string;
    }[];
}
export const devDashConfig: DevDashConfig = {
    // github_access_token: process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN as string,
    github_access_token: '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',
    repositories: [
        {
            id: '32ed57d0- b552 - 4f86 - b306 - 4abc3f246cf5',
            url: 'https://www.github.com/styled-components/styled-components',
        },
    ]
}