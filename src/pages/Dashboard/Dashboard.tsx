import styled from 'styled-components'
import { RepositoryCard } from '../../components/RepositoryCard/RepositoryCard';
import { InMemoryGithubRepositoryRepository } from '../../infraestructure/InMemoryGithubRepositoryRepository';

const title = 'DevDash_'

const gitHubApiResponses = new InMemoryGithubRepositoryRepository().search();


export function Dashboard() {
    return (
        <>
            <header>
                <Title>{title}</Title>
            </header>
            <div style={{ height: 32 }}></div>
            <section>
                {
                    gitHubApiResponses.map((r) => (
                        <RepositoryCard githubApiResponse={r} />
                    ))
                }
            </section>
        </>
    )
}

const Title = styled.h1`
    color: #60cf60;
`