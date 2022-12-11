import styled from 'styled-components'
import { RepositoryCard } from '../../components/RepositoryCard/RepositoryCard';
import { gitHubApiResponses } from '../../data/githubApiResponses';

const title = 'DevDash_'

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