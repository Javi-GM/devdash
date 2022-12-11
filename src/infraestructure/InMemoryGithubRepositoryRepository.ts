import { gitHubApiResponses } from "../data/githubApiResponses";
import { RootObject } from "./interfaces";

class InMemoryGithubRepositoryRepository {
    search(): RootObject[] {
        return gitHubApiResponses;
    }
}

export { InMemoryGithubRepositoryRepository }