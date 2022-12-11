import { gitHubApiResponses } from "../data/githubApiResponses";
import { GithubApiResponse } from "./interfaces";

class InMemoryGithubRepositoryRepository {
    search(): GithubApiResponse[] {
        return gitHubApiResponses;
    }
}

export { InMemoryGithubRepositoryRepository }