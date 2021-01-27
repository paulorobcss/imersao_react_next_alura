import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>ISSO É UMA SIMULAÇÃO</title>
      </Head>

      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Título do Widget</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={ (event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`)
              console.log("Submissão de dados");
            }}>
              <input
                onChange={ (event) => {
                  setName(event.target.value);
                }}
                placeholder="Insira seu nome" 
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes do povo</h1>
          </Widget.Header>
          <Widget.Content>
            <p>LOREM FUCKING IPSUM</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/paulorobcss/imersao_react_next_alura" />
    </QuizBackground>
  );
}
