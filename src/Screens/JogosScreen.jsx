
import React from 'react';
import GameList from '../components/GameList';
import QuizList from '../components/QuizList';

export default function GamesScreen() {
    return (
        <div>
            <h1>Jogos Educacionais e Quizzes</h1>
            <h2>Jogos</h2>
            <GameList />
            <h2>Quizzes</h2>
            <QuizList />
        </div>
    );
}
