import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RepositoryCard } from '../../components/RepositoryCard/RepositoryCard';
import { devDashConfig } from '../../devdash.config';
import { GithubApiGithubRepositoryRepository } from '../../infraestructure/GithubApiGithubRepositoryRepository';
import { GithubApiResponse } from '../../infraestructure/interfaces';

const title = 'DevDash_'

const repository = new GithubApiGithubRepositoryRepository(
    devDashConfig.github_access_token
)

export function Dashboard() {
    const [githubApiResponses, setGithubApiResponses] = useState<GithubApiResponse[]>([])

    useEffect(() => {
        repository.search(devDashConfig.repositories.map((r) => r.url))
            .then(data => setGithubApiResponses(data))
    }, [])

    return (
        <>
            <header>
                <Title>{title}</Title>
            </header>
            <div style={{ height: 32 }}></div>
            <section>
                {
                    githubApiResponses.map((r) => (
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