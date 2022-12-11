import { CiStatus, GithubApiResponse, PullRequest, RepositoryData } from "./interfaces";

class GithubApiGithubRepositoryRepository {
    private readonly endpoints = [
        "https://api.github.com/repos/$organization/$name",
        "https://api.github.com/repos/$organization/$name/pulls",
        "https://api.github.com/repos/$organization/$name/actions/runs?page1&per_page=1",
    ];

    constructor(private readonly personalGithubToken: string) { }

    async search(repositoryUrls: string[]): Promise<GithubApiResponse[]> {
        const responses = repositoryUrls
            .map(url => this.urlToRepositoryId(url))
            .map(repositoryId => this.searchByRepositoryId(repositoryId));

        return Promise.all(responses);

    }

    private async searchByRepositoryId(repositoryId: RepositoryId): Promise<GithubApiResponse> {
        const responsesByEndpoint = this.endpoints
            .map(e => e.replace("$organization", repositoryId.organization))
            .map(e => e.replace("$name", repositoryId.name))
            .map(url =>
                fetch(url)
            );
        return Promise.all(responsesByEndpoint)
            .then(responses => Promise.all(responses.map(r => r.json())))
            .then(([repositoryData, pullRequests, ciStatus]) => {
                return {
                    repositoryData: repositoryData as RepositoryData,
                    pullRequests: pullRequests as PullRequest[],
                    ciStatus: ciStatus as CiStatus,
                }
            });
    }

    private urlToRepositoryId(url: string): RepositoryId {
        const urlParts = url.split("/");

        return {
            organization: urlParts[urlParts.length - 2],
            name: urlParts[urlParts.length - 1],
        };
    }
}


interface RepositoryId {
    organization: string;
    name: string;
}

export { GithubApiGithubRepositoryRepository }