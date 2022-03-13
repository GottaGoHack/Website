<script>
    export let top;
    export let bottom;

    export let width = 'auto';
    export let height;

    export let shadowWidth;
    export let shadowHeight;

    export let margin;

    $: size = `width: ${width}vw; height: ${height}vh;`;
    $: shadowSize = `width: ${shadowWidth}vw; height: ${shadowHeight}vh;`;
    $: topPosition = `top: -${margin}vh; left: -${margin}vh;`
    $: bottomPosition = `bottom: -${margin}vw; right: -${margin}vw;`
</script>

<div class="shadows" style={size}>
    <div class="shadow top {top}" style="{shadowSize} {topPosition}"></div>
    <div class="shadow bottom {bottom}" style="{shadowSize} {bottomPosition}"></div>

    <div class="shadows-content" style={size}>
        <slot />
    </div>
</div>

<style lang="scss">
    @import 'mixins';

    .shadows {
        position: relative;

        margin-left: 0vw;
        margin-right: 15vw;
    }

    .shadows-content {
        position: absolute;
        top: 0;

        :global(*) {
            flex-grow: 1;
        }
    }

    .shadow {
        position: absolute;

        @include colored();

        &.top {
            top: -50px;
            left: -50px;
        }

        &.bottom {
            bottom: -50px;
            right: -50px;
        }
    }
</style>
