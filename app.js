particlesJS('particles-js', {
    particles: {
        color: '#3498db',
        color_random: true,
        shape: 'edge', // "circle", "edge" or "triangle"
        opacity: {
            opacity: 1,
            anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.4,
                sync: false
            }
        },
        size: 4,
        size_random: true,
        nb: 100,
        line_linked: {
            enable_auto: false,
            distance: 140,
            color: '#FFFFFF',
            opacity: 1,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        enable: false,
        mouse: {
            distance: 250
        },
        detect_on: 'canvas', // "canvas" or "window"
        mode: 'grab', // "grab" of false
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
                enable: true,
                mode: 'push', // "push" or "remove"
                nb: 4
            },
            onresize: {
                enable: true,
                mode: 'out', // "out" or "bounce"
                density_auto: false,
                density_area: 900 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
            }
        }
    },
    /* Retina Display Support */
    retina_detect: true
});/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


