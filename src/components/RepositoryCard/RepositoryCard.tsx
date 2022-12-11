import styled from "styled-components";
import { GithubApiResponse } from "../../infraestructure/interfaces";

interface Props {
    githubApiResponse: GithubApiResponse;
}

function RepositoryCard({ githubApiResponse }: Props) {
    const { repositoryData, ciStatus } = githubApiResponse;
    const lastUpdate = ciStatus.workflow_runs[0].updated_at;
    return (
        <Wrapper>
            <header
                key={repositoryData.id}
            >
                <CardTitle>{repositoryData.full_name}</CardTitle>
            </header>
            <p>
                Last update at: {lastUpdate}
            </p>
            <main>
                <p>{repositoryData.description}</p>
            </main>
        </Wrapper>
    )
}

export { RepositoryCard };

const Wrapper = styled.article`
    width: 300px;
    height: 300px;
    border: solid black;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    font-size: 0.875rem;
`
const CardTitle = styled.h2`
    font-size: 1rem;
`