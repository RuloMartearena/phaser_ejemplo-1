// import React from 'react';
import Phaser from 'phaser';
import { useState, useEffect } from 'react';
import Escena from './components/Escena';

function App() {

    const [listo, setListo] = useState(false);

    useEffect(() => {
        var config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 } // cambia la gravedad en el eje x e y
                }
            },
            scene:[Escena]
            // scene: {
            //     preload: preload,
            //     create: create
            // }
        };
        // Arranca el juego 
        // A la variable game se le asigna un nuevo objeto de tipo phaser
        var game = new Phaser.Game(config);

        game.events.on("LISTO", setListo);

        return () => {
            setListo(false);
            game.destroy(true);
        }
    }, [listo]);
} 

export default App;