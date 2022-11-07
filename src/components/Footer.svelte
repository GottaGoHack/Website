<script>
    export let routes;
    export let socials;
</script>

<div id="footer">
    <div class="footer-title">GGH</div>
    <div class="footer-menu">
        {#each routes as {label, route} }
            <a class="footer-menu-text" href={route}>{label}</a>
        {/each}
    </div>
    <div class="footer-subtitle">Nous suivre</div>
    <div class="footer-social-media">
        {#each socials as { image, label, link}}
        <a href={link}>
            <img class="footer-social-image" src={image} alt={label} />
        </a>
        {/each}
    </div>
    <div class="footer-legal"> © Gotta Go Hack 2022  |  Tous droits réservés</div>
</div>


<style lang="scss">
    @import 'vars';

   
    #footer {
    display: flex;
    flex-direction: column;

    justify-content: left;
    align-items: center;

    width: auto;

    .footer-title {
        color: $color-blue;
        font-weight: bold;
        font-size: 5vmin;

        font-family: $font-barlow;
    }

    .footer-menu {
        display: flex;
        flex-direction: row;

        font-size: 3vmin;

        margin-top: 3vmin;
    

        .footer-menu-text {
            margin-right: 2vmin;
            color: #545151;
        }
    }

    a {
        margin-right: 2vmin;
        color:#545151;
        text-decoration: none;
    }

    .footer-subtitle {
        color: #545151;
        font-weight: 600;
        font-size: 3vmin;

        margin-top: 5vmin;
    }

    .footer-social-media {
        display: flex;
        flex-direction: row;
        margin-top: 3vmin;
    }

    .footer-social-image {
        width: 5vmin;

    }

    .footer-legal {
        color: grey;
        font-size: 2vmin;

        margin-top: 7vmin;
        margin-bottom: 7vmin;
    }
}

    #bottom {
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
</style>