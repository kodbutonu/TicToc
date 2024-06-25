import React, { useState } from 'react';

// Başlangıç oyun tahtası, 3x3'lük bir matris
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {
    // Oyun tahtasını başlangıç oyun tahtasıyla başlatıyoruz
    let gameBoard = initialGameBoard;

    // Her hamle için oyun tahtasını güncelliyoruz
    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        // Belirtilen satır ve sütuna oyuncu simgesini ekliyoruz
        gameBoard[row][col] = player;
    }

    // Render işlemi
    return (
        <ol id="game-board">
            {/* Her satır için bir <li> oluşturuyoruz */}
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {/* Her sütun için bir <li> ve <button> oluşturuyoruz */}
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                {/* Kareye tıklandığında onSelectSquare fonksiyonunu çağırıyoruz */}
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol!==null}>
                                    {/* Karedeki oyuncu simgesini gösteriyoruz */}
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
