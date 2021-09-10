<script>
    import Bottom from '/assets/bottom_logos.png';
</script>

<div id="footer">
    <h1>Nous contacter</h1>
    <hr />

    <div>
        <div class="left">
            <div id="emails">
                <div class="email">info{'@'}gottagohack.fr</div>
                <div class="email">com{'@'}gottagohack.fr</div>
            </div>

            <div id="staff">
                <div class="member">Présidente - Jeanne Morin : jeanne.morin@epita.fr</div>
                <div class="member">Trésorier - Alexandre Lemonnier : alexandre.lemonnier@epita.fr</div>
                <div class="member">Secrétaire - Tao Blancheton : tao.blancheton@epita.fr</div>
            </div>
        </div>
        <div class="right">
            <!-- TODO: Missing images -->
        </div>
    </div>
</div>

<div id="bottom">
    <img class="logos" src={Bottom} alt="Logos de Gotta Go Hack et EPITA" />
    <div class="text">
        <p>Gotta Go Hack est une association d'EPITA, l'école d'ingénieur pour l'informatique.</p>
        <p>Depuis 2021</p>
    </div>
</div>

<style lang="scss">
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
    }

    #bottom {
        justify-content: space-evenly;

        padding: 25px 0;

        background-color: white;
        color: black;

        .text {
            flex-direction: column;
            justify-content: center;

            font-weight: 300;
            font-size: 28px;

            p {
                margin: 0;
            }
        }
    }
</style>
