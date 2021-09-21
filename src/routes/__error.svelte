<script context="module">
    /** @type {import('@sveltejs/kit').ErrorLoad} */
    export function load({ status }) {
        return {
            props: { status }
        };
    }
</script>

<script>
    export let status;
</script>

<div id="error">
    Erreur {status} -
    {#if status === 404}
        Vous êtes perdu ?
    {:else}
        C'est cassé !
    {/if}
</div>

<style lang="scss">
    @import 'vars';

    #error {
        flex-grow: 1;

        justify-content: center;
        align-items: center;

        font-family: $font-suez;
        font-size: 64px;

        background-color: $color-red;
        color: white;
    }
</style>
