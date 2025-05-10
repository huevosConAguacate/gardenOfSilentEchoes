const initialize = () => {
    tsParticles.load('tsparticles', {
        fullScreen: {
            enable: true
        },
        particles: {
            number: {
                value: 80
            },
            color: {
                value: ['#ffffff', '#00ffea', '#ff00e1']
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.6
            },
            size: {
                value: 3
            },
            move: {
                enable: true,
                speed: 0.8
            }
        },
        background: {
            color: 'transparent'
        }
    });
}


window.onload = (event) => {
    initialize();
};


