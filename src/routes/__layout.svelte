<script>
    import { page } from '$app/stores';

    import '/app.scss';

    const routes = [
        { label: 'L\'asso', route: '/association' },
        { label: 'Hackathon ?', route: '/hackathon' },
        { label: 'Archives', route: '/archives/0' }, // TODO: Combo-box
        { label: 'Contact', route: '/' } // TODO: Contact ?
    ];

    $: navColor = ({
        '/': 'blue',
        '/association': 'blue',
        '/hackathon': 'red',
        '/archives/0': 'yellow'
    })[$page.path];
</script>

<div id="navigation">
    <div class="logo-container">
        <a class="logo" href="/" sveltekit:prefetch>GGH</a>
    </div>
    <div class={`links colored ${navColor}`}>
        {#each routes as { label, route }}
            <a class="link" href={route} sveltekit:prefetch>{label}</a>
        {/each}
    </div>
    <div class="space"></div>
</div>
<div id="behind-navbar"></div>

<slot />

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
            $horizontal-padding: 60px;

            justify-content: space-evenly;
            align-items: center;

            font-size: 18px;
            font-weight: 600;

            .link {
                display: flex;
                align-items: center;

                height: 100%;

                padding: 0 25px;

                &:first-child {
                    padding-left: $horizontal-padding;
                }

                &:last-child {
                    padding-right: $horizontal-padding;
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
</style>
