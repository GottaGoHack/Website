<script>
    import { onMount } from 'svelte';

    import { title } from '/app';

    import Shadows from '/components/Shadows.svelte';
    import Arrow from '/components/Arrow.svelte';

    import Discord from '/assets/discord.svg';
    import Participants from '/assets/gauge_participants.svg';
    import Schools from '/assets/gauge_schools.svg';


    const next = new Date(2021, 12 - 1, 3); // 0 = january, 11 = december (only months have this specificity)


    let countdown = getCountdown();

    onMount(() => {
        const interval = setInterval(() => countdown = getCountdown(), 1000);
        return () => clearInterval(interval);
    });

    function getCountdown()
    {
        const diff = new Date(next - new Date());
        const toDigits = (label, value, singular) => ({
            label: label + (value > 1 && !singular ? 's' : ''),
            value: value < 10 ? [0, value] : [~~(value / 10), value % 10]
        });

        return [
            toDigits('Mois', diff.getMonth(), true),
            toDigits('Jour', diff.getDate()),
            toDigits('Heure', diff.getHours())
        ];
    }
</script>

<svelte:head>
    <title>{title('Accueil')}</title>
</svelte:head>

<div id="background">
    <div class="part blue"></div>
    <div class="part yellow"></div>
    <div class="part red"></div>
    <div class="part blue cropped"></div>
</div>

<div id="header">
    <div class="left">
        <div class="inner">
            <h1>Hackathon Gotta Go Hack edition #0</h1>
            <div>
                <h2 class="red">C'est déjà fini !</h2>
            </div>
            <div class="event-container">
                <button class="event">Revivre l'évènement</button>
                <div class="space"></div>
            </div>
        </div>
    </div>
    <div class="right">
        <Shadows top="yellow" bottom="red" width="800" height="500" shadowWidth="450" shadowHeight="100" margin="50">
            <iframe src="https://www.youtube.com/embed/JxOdWvtRns0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Shadows>
    </div>
</div>

<div id="when">
    <div class="left">
        <div class="container">
            <div id="countdown">
                {#each countdown as { label, value: [first, second] }}
                    <div class="part">
                        <div class="digits">
                            <div class="digit">{first}</div>
                            <div class="colon">:</div> <!-- TODO: Is this the right thing ? -->
                            <div class="digit">{second}</div>
                        </div>

                        <div class="label">{label}</div>
                    </div>
                {/each}
            </div>

            <div id="description-container">
                <div class="description">On compte les heures avant de pouvoir vous retrouver !</div>
                <a id="more-info" href="#details">
                    <h3 class="label red opaque">Plus d'infos</h3>
                    <Arrow />
                </a>
            </div>
        </div>
    </div>
    <div class="right">
        <div>
            <h2 class="until blue">Avant le...</h2>
        </div>
        <h1 class="title">Hackathon Gotta Go Hack edition #1</h1>

        <hr />

        <div class="date">3 au 5 décembre</div>
        <div class="sub-text">100% présentiel</div>
    </div>
</div>

<div id="details">
    <div class="left">
        <h1>Hackathon Gotta Go Hack edition #1</h1>

        <div class="gauge">
            <img class="image" src={Participants} alt="Participants" />
            <div class="description">Jauge max 100 participants</div>
        </div>
        <div class="gauge">
            <img class="image" src={Schools} alt="Ecoles" />
            <div class="description">Ouvert à plusieurs ecoles d'ingenieurs</div>
        </div>
    </div>
    <div class="right">
        <Shadows top="blue" bottom="yellow" height="415" shadowWidth="350" shadowHeight="75" margin="25">
            <div class="title">100% EN PRESENTIEL sur le site d'EPITA Kremlin-Bicêtre</div>

            <div class="content">
                <p>La grande problématique de cette édition sera le GREEN IT.</p>
                <p>Bien sûr le thème précis sera révélé au lancement du Hackathon ;)</p>
                <p>
                    [Nouveauté de l'édition] : pour les curieux qui souhaiteraient être accompagnés et découvrir les
                    étapes de l'innovation de l'idéation à la conception en passant par le business canva, un parcours
                    tuto sera proposé. Attention, nombre de places très limité.
                </p>
            </div>
        </Shadows>

        <a id="discord" href="https://discord.gg/yXfZpGGeqP" target="_blank" rel="external">
            <!-- TODO: Include raw SVG ? -->
            <img class="image" src={Discord} alt="Discord" />
            <div class="text">
                Viens poser toutes tes questions sur notre serveur discord !
            </div>
        </a>
    </div>
</div>

<style lang="scss">
    @import 'mixins';
    @import 'vars';

    #background {
        position: absolute;
        // top: -50vh;
        top: -485px;
        left: -50vw;

        flex-direction: column;

        width: 200vw;
        // height: 200vh;
        height: 1940px;

        transform: rotate(-15deg);

        z-index: -1;

        .part {
            flex-shrink: 0;
            // height: 95vh; TODO: Back to vh ?
            height: 920px;

            @include colored();

            &:first-child {
                // height: 145vh;
                height: 1410px;
            }

            &:last-child {
                height: 400px;
            }
        }
    }

    #header {
        // height: calc(100vh - #{$nav-height});
        height: 900px;

        .left, .right {
            flex: 0.5;

            justify-content: center;
            align-items: center;
        }

        .left {
            flex-direction: column;

            .inner {
                flex-direction: column;
            }

            .event-container {
                $border: solid white 3px;

                margin-top: 75px;

                .event {
                    padding: 20px 25px;

                    font-size: 20px;
                    font-weight: 600;

                    background: none;

                    border: $border;
                }

                .space {
                    flex-grow: 1;

                    border-top: $border;
                }
            }
        }
    }

    #when {
        // height: 100vh;
        height: 970px;

        .left, .right {
            flex: 0.5;
            flex-direction: column;

            padding: 200px 50px;
        }

        .left {
            justify-content: center;
            align-items: center;

            .container {
                flex-direction: column;
            }

            #countdown {
                padding: 15px 25px;

                background-color: #424134;

                border-radius: 45px;

                .part {
                    flex: 0.33;
                    flex-direction: column;

                    font-size: 42px;

                    .digits {
                        padding: 25px 15px;

                        font-weight: 700;

                        .digit {
                            flex-grow: 1;
                            justify-content: center;
                            align-items: center;

                            width: 100px;
                            height: 180px;

                            font-size: 96px;

                            background-color: white;
                            color: black;

                            border-radius: 15px;
                        }

                        .colon {
                            align-items: center;
                        }
                    }

                    .label {
                        justify-content: center;

                        font-family: $font-barlow;
                        font-weight: 500;
                    }
                }
            }

            #description-container {
                position: relative;

                .description {
                    margin-top: 35px;
                    padding-left: 15px;

                    font-size: 24px;
                    font-weight: 300;
                    font-style: italic;

                    color: black;
                }

                #more-info {
                    display: flex;
                    flex-direction: column;

                    position: absolute;
                    top: 250px;
                    left: 125px;

                    .label {
                        padding: 0 10px;
                    }
                }
            }
        }

        .right {
            .until {
                padding: 0 10px;
            }

            .title {
                margin-top: 25px;
            }

            .date {
                font-family: $font-suez;
                font-size: 58px;
            }

            .sub-text {
                font-size: 36px;
            }
        }
    }

    #details {
        // height: 100vh;
        height: 970px;

        margin-top: 25px;
        margin-bottom: 150px;
        padding: 175px 100px;

        .left, .right {
            flex-direction: column;
        }

        .left {
            flex: 0.4;

            padding-top: 25px;

            .gauge {
                flex-direction: column;
                align-items: flex-start;

                margin-top: 75px;

                .image {
                    margin-bottom: 15px;
                    width: 385px;
                }

                .description {
                    max-width: 500px;

                    font-size: 28px;
                    text-transform: uppercase;
                }
            }
        }

        .right {
            flex: 0.6;

            :global(.shadows-content) {
                flex-direction: column;

                padding: 20px 25px;

                font-size: 29px;

                background-color: $color-red;
            }

            .title {
                font-weight: bold;
                font-style: italic;
            }

            .content {
                flex-direction: column;

                margin-top: 35px;

                p {
                    margin: 0;
                }
            }

            #discord {
                display: flex;
                align-items: center;

                margin-top: 60px;
                margin-left: 25px;

                .image {
                    width: 100px;
                }

                .text {
                    width: 550px;

                    margin-left: 25px;

                    font-weight: bold;
                    font-style: italic;
                    font-size: 32px;
                }
            }
        }
    }
</style>
