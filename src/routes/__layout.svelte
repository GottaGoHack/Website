<script>
    import { page } from '$app/stores';

    import GGH from '/assets/logo.svg';
    import EPITA from '/assets/school/epita-logo.png';
    import EPITECH from '/assets/school/epitech-logo.png';
    import Facebook from '/assets/socials/facebook.svg';
    import Instagram from '/assets/socials/instagram.svg';
    import YouTube from '/assets/socials/youtube.svg';
    import LinkedIn from '/assets/socials/linkedin.svg';

    import '/app.scss';

    const routes = [
        { label: 'L\'asso', route: '/association' },
        { label: 'Hackathon ?', route: '/hackathon' },
        { label: 'Actu', route: '/actu' },
        {
            label: 'Archives',
            subRoutes: [
                { label: 'Hackathon #0', route: '/archives/0' },
                { label: 'Hackathon #1', route: '/archives/1' }
            ]
        },
        { label: 'Contact', route: '#footer' }
    ];

    const socials = [
        { image: Facebook, label: 'gottagohack', link: 'https://www.facebook.com/gottagohack' },
        { image: Instagram, label: '@gotta_go_hack', link: 'https://www.instagram.com/gotta_go_hack/' },
        { image: YouTube, label: 'Gotta Go Hack', link: 'https://www.youtube.com/channel/UCWoPWLWl-gT11wkwTxai8ZA' },
        { image: LinkedIn, label: 'Gotta Go Hack', link: 'https://www.linkedin.com/company/gotta-go-hack/' }
    ];

    const bottom = [
        { image: GGH, label: 'gottagohack', link: 'https://www.linktr.ee/GottaGoHack' },
        { image: EPITA, label: 'epita', link: 'https://www.epita.fr' },
        { image: EPITECH, label: 'epitech', link: 'https://www.epitech.eu' },     
    ]

    $: navColor = ({
        '/': 'blue',
        '/association': 'blue',
        '/hackathon': 'red',
        '/actu': 'blue',
        '/archives': 'yellow'
    })[$page.url.pathname.match(/^\/[^\/]*/g)] || 'red';
</script>

<div id="navigation">
    <div class="logo-container">
        <a class="logo" href="/" sveltekit:prefetch>GGH</a>
    </div>
    <div class="links colored {navColor}">
        {#each routes as { label, route, subRoutes }}
            <div class="link-container" class:has-sub={!!subRoutes}>
                {#if route}
                    <a class="link" href={route} sveltekit:prefetch>{label}</a>
                {:else}
                    <div class="link opaque">{label}</div>
                {/if}

                {#if subRoutes}
                    {#each subRoutes as { label, route }, i}
                        <a class="link sub index-{i + 1}" href={route} sveltekit:prefetch>{label}</a>
                    {/each}
                {/if}
            </div>
        {/each}
    </div>
    <div class="space"></div>
</div>
<div id="behind-navbar"></div>

<slot />

<div id="footer">
    <h1>Nous contacter</h1>
    <hr />

    <div>
        <div class="left">
            <div id="emails">
                <div class="email">info{'@'}gottagohack.fr</div>
            </div>

            <div id="staff">
                <div class="member">Présidente - Jeanne Morin</div>
                <div class="member">Vice-président - Mehdi Oueslati</div>
                <div class="member">Trésorier - Alexandre Lemonnier</div>
                <div class="member">Secrétaire - Tao Blancheton</div>
            </div>
        </div>
        <div class="right">
            {#each socials as { image, label, link }}
                <a class="social" href={link} target="_blank" rel="external">
                    <img class="image" src={image} alt="Réseau social" />
                    <div class="label">{label}</div>
                </a>
            {/each}
        </div>
    </div>
</div>


<div id="bottom">
    <div class="logos">
    {#each bottom as {image, label, link}}     
            <a class="logo" href={link} target="_blank" rel="external">
                <img class="image" src={image} alt={label} height="50vh">
            </a>
    {/each}
    </div>

    <div class="text">
        <p>Gotta Go Hack est une association des écoles EPITA & EPITECH.</p>
        <p>Crédits Photo : Association <a href="https://ephemere.photo/#">Ephemere</a></p>
    </div>
</div>

<style lang="scss">
    @import 'vars';

    #navigation {
        position: fixed;

        width: 100vw;
        height: $nav-height;

        z-index: 99;

        .logo-container {
            background-color: $color-black;

            .logo {
                display: flex;
                align-items: center;

                height: 100%;

                padding: 0 35px;

                font-family: $font-barlow;
                font-size: 36px;
                font-weight: bold;
            }
        }

        .links {
            $horizontal-padding: 35px;

            justify-content: space-evenly;

            font-size: 18px;
            font-weight: 600;

            .link-container {
                $sub-transition-duration: .1s;

                flex-direction: column;

                position: relative;

                &:first-child {
                    margin-left: $horizontal-padding;
                }

                &:last-child {
                    margin-right: $horizontal-padding;
                }

                .link {
                    display: flex;
                    align-items: center;
                    flex-shrink: 0;

                    height: $nav-height;

                    padding: 0 25px;

                    &.sub {
                        display: none;

                        position: absolute;

                        width: max-content;

                        animation: sub-appear $sub-transition-duration forwards;

                        @for $i from 1 through 10 {
                            &.index-#{$i} {
                                top: $nav-height * $i;
                            }
                        }
                    }
                }

                &.has-sub:hover {
                    cursor: default;

                    .link {
                        background-color: $color-black;

                        transition: background-color $sub-transition-duration;

                        &.sub {
                            display: flex;

                            &:hover {
                                background-color: lighten($color-black, 6%);
                            }

                            &:active {
                                background-color: lighten($color-black, 12%);
                            }
                        }
                    }
                }
            }
        }

        .space {
            flex-grow: 1;
        }
    }

    #behind-navbar {
        height: $nav-height;

        background-color: white;
    }

    #footer {
        flex-direction: column;

        padding: 75px 125px;

        h1 {
            width: auto;

            text-transform: none;
        }

        .left {
            flex-direction: column;

            #emails {
                flex-direction: column;

                margin-top: 20px;

                font-size: 34px;
                font-weight: bold;
            }

            #staff {
                flex-direction: column;

                margin-top: 50px;

                font-size: 32px;
                font-weight: 300;

                line-height: 42px;
            }
        }

        .right {
            flex-grow: 1;
            flex-direction: column;
            align-items: flex-end;

            .social {
                display: flex;
                align-items: center;

                width: 400px;

                margin-bottom: 20px;

                font-size: 28px;

                .image {
                    width: 55px;

                    margin-right: 18px;
                }
            }
        }
    }

    #bottom {
        background-color: white;
        color: black;

        display: grid;
        grid-template-columns: auto auto;
        padding: 1vh 1vh;

        .logos {
            padding-left: 2px;

            display : grid;
            grid-template-columns: auto auto auto;
            grid-gap: 2vh;

            justify-content: right;
            .logo {

                
            }
        }

        .text {
            flex-direction: column;

            font-weight: 300;
            font-size: 1vw;

            justify-content: center;

            padding-left: 5vh;
            p {
                margin: 0;
            }
        }
    }

    @keyframes sub-appear {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
</style>
